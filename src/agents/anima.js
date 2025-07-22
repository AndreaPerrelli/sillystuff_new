export default {
  name: 'Anima',
  attackPattern(scene) {
    const centerX = scene.scale.width / 2;
    const centerY = 100;
    for (let i = 0; i < 8; i++) {
      const angle = i * 45; // 360 / 8
      scene.spawnBullet(centerX, centerY, angle + scene.time.now / 20);
    }
  },
  ultimate(scene) {
    // Placeholder ultimate ability
  },
  sprite: null
};
