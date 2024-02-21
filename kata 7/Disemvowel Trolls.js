function disemvowel(str) {
  const vow = ['a', 'e', 'i', 'o', 'u']
  let result = ''
  for (const char of str) {
    result = vow.includes(char.toLowerCase()) ? result : result + char
  }

  return result
}
