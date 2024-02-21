function digPow(n, p) {
  const arr = n.toString().split('')
  let result = 0
  for (const val of arr) {
    result += Math.pow(+val, p++)
  }

  return result % n === 0 ? result / n : -1
}
