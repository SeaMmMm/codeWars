function high(x) {
  const arr = x.split(' ');
  const charA = 'a'.charCodeAt(0);
  let result = [0, ''];

  for (const word of arr) {
    let val = 0;
    for (const char of word) {
      val += char.charCodeAt(0) - charA + 1;
    }
    result = result[0] >= val ? result : [val, word];
  }

  return result[1];
}
