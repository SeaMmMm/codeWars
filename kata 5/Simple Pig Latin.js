function pigIt(str) {
  const arr = str.split(' ');
  const result = [];
  for (const word of arr) {
    if (check(word)) {
      result.push(word);
    } else {
      result.push(word.slice(1) + word[0] + 'ay');
    }
  }

  return result.join(' ');
}

function check(string) {
  if (string.length === 1) {
    return string.charCodeAt(0) < 65 || string.charCodeAt(0) > 122;
  } else {
    return false;
  }
}
