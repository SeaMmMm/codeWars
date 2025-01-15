function spinWords(string) {
  const arr = string.split(' ');
  let strArr = [];

  for (const word of arr) {
    if (word.length < 5) strArr.push(word);
    else {
      strArr.push(word.split('').reverse().join(''));
    }
  }

  return strArr.join(' ');
}
