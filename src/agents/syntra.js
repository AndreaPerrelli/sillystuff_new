export default {
  name: 'SYNTRA',
  attackPattern(scene) {
    const x1 = scene.scale.width / 4;
    const x2 = 3 * scene.scale.width / 4;
    const y = 100;
    scene.spawnBullet(x1, y, 90);
    scene.spawnBullet(x2, y, 90);
  },
  ultimate(scene) {
    // Placeholder ultimate ability
  },
  sprite: null
};
