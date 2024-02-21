function findNb(m) {
  let rs = 0
  for (let i = 1; rs < m; i++) {
    rs += Math.pow(i, 3)
    if (rs === m) return i
  }

  return -1
}
