function validBraces(braces) {
  if (braces.length % 2 !== 0) return false

  const arr = []
  for (const str of braces) {
    switch (str) {
      case '(':
      case '[':
      case '{':
        arr.push(str)
        break
      case ')':
        if (arr.pop() !== '(') return false
        break
      case ']':
        if (arr.pop() !== '[') return false
        break
      case '}':
        if (arr.pop() !== '{') return false
        break
    }
  }
  return arr.length === 0
}
