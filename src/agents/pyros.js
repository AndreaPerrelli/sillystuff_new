export default {
  name: 'PYROS',
  attackPattern(scene) {
    const centerX = scene.scale.width / 2;
    const centerY = 100;
    const angles = [-20, 0, 20];
    angles.forEach(a => scene.spawnBullet(centerX, centerY, 90 + a));
  },
  ultimate(scene) {
    // Placeholder ultimate ability
  },
  sprite: null
};
