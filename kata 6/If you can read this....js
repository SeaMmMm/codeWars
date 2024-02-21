function isSymbol(str) {
  return str === ',' || str === '.' || str === '!' || str === '?'
}

function toNato(words) {
  // you can access the preloaded NATO dictionary
  // NATO['A'] === 'Alfa', etc.
  let arr = words.split(''),
    result = []
  for (const word of arr) {
    if (isSymbol(word)) result.push(word)
    else {
      word !== ' ' ? result.push(NATO[word.toUpperCase()]) : ''
    }
  }
  return result.join(' ')
}
