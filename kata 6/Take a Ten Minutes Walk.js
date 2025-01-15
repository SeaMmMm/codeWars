function isValidWalk(walk) {
  function step(position, to) {
    switch (to) {
      case 'n':
        position['y']++;
        break;
      case 'w':
        position['x']++;
        break;
      case 'e':
        position['x']--;
        break;
      case 's':
        position['y']--;
        break;
      default:
        throw new Error('Position error');
    }
  }
  const position = {
    x: 0,
    y: 0,
  };
  for (const val of walk) {
    step(position, val);
  }
  console.log(position);
  return walk.length === 10 && position.x === 0 && position.y === 0;
}
