function duplicateEncode(word) {
  word = word.toLowerCase()
  const obj = {}
  let str = ''

  for (const char of word) {
    obj[char] = char in obj ? ++obj[char] : 1
  }

  for (const char of word) {
    if (obj[char] > 1) str += ')'
    else str += '('
  }

  return str
}
