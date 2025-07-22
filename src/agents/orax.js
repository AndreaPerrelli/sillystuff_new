export default {
  name: 'ORAX',
  attackPattern(scene) {
    const centerX = scene.scale.width / 2;
    const centerY = 100;
    const baseAngle = scene.time.now / 50;
    for (let i = 0; i < 4; i++) {
      const angle = baseAngle + i * 90;
      scene.spawnBullet(centerX, centerY, angle);
    }
  },
  ultimate(scene) {
    // Placeholder ultimate ability
  },
  sprite: null
};
