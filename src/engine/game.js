import Anima from '../agents/anima.js';
import Orax from '../agents/orax.js';
import Pyros from '../agents/pyros.js';
import Syntra from '../agents/syntra.js';

const agents = [Anima, Orax, Pyros, Syntra];
let currentAgentIndex = 0;

class MainScene extends Phaser.Scene {
  constructor() {
    super('main');
    this.player = null;
    this.cursors = null;
    this.bullets = null;
    this.timeSinceLast = 0;
  }

  preload() {
    // No assets yet
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    this.player = this.add.rectangle(width / 2, height - 50, 20, 20, 0x00ff00);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.bullets = this.physics.add.group();

    this.physics.add.overlap(this.player, this.bullets, this.handleHit, null, this);
    this.time.addEvent({ delay: 2000, callback: this.changeAgent, callbackScope: this, loop: true });
  }

  changeAgent() {
    currentAgentIndex = (currentAgentIndex + 1) % agents.length;
  }

  handleHit(player, bullet) {
    bullet.destroy();
    // Here we could decrease health etc
  }

  spawnBullet(x, y, angle) {
    const bullet = this.add.rectangle(x, y, 6, 6, 0xff0000);
    this.physics.add.existing(bullet);
    this.physics.velocityFromAngle(angle, 150, bullet.body.velocity);
    this.bullets.add(bullet);
  }

  update(time, delta) {
    const speed = 200;
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(speed);
    } else {
      this.player.body.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(speed);
    } else {
      this.player.body.setVelocityY(0);
    }

    this.timeSinceLast += delta;
    const agent = agents[currentAgentIndex];
    if (this.timeSinceLast >= 500) {
      agent.attackPattern(this);
      this.timeSinceLast = 0;
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: MainScene
};

new Phaser.Game(config);
