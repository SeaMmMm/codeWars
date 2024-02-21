const A = 'a'.charCodeAt(0)
const Z = 'z'.charCodeAt(0)

function isAlpha(itm) {
  return itm >= A && itm <= Z
}

function alphabetPosition(text) {
  const words = text.split('')
  const result = []

  for (const word of words) {
    const itm = word.toLocaleLowerCase().charCodeAt(0)
    if (isAlpha(itm)) {
      result.push(itm - A + 1)
    }
  }
  return result.join(' ')
}
