function multiply(a, b) {
  let result = Array(a.length + b.length).fill(0)

  for (let i = a.length - 1; i >= 0; i--) {
    let carry = 0
    for (let j = b.length - 1; j >= 0; j--) {
      let product = parseInt(a[i]) * parseInt(b[j]) + result[i + j + 1] + carry
      result[i + j + 1] = product % 10
      carry = Math.floor(product / 10)
    }
    result[i] += carry
  }

  while (result[0] === 0) {
    result.shift()
  }

  return result.join('') || '0'
}
