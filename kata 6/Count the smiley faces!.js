function countSmileys(arr) {
  let result = 0;
  for (const face of arr) {
    if (face.length <= 1 || face.length > 3) continue;

    const chars = face.split('');
    if (chars.length === 2) {
      if (
        (chars[0] === ':' || chars[0] === ';') &&
        (chars[1] === ')' || chars[1] === 'D')
      )
        result++;
    } else {
      if (
        (chars[0] === ':' || chars[0] === ';') &&
        (chars[1] === '-' || chars[1] === '~') &&
        (chars[2] === ')' || chars[2] === 'D')
      )
        result++;
    }
  }

  return result;
}
