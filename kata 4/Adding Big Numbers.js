/**
 * 大数相加
 * @param {String} a
 * @param {String} b
 */
function add(a, b) {
  let la = a.length - 1,
    lb = b.length - 1,
    step = 0,
    result = []

  while (la >= 0 || lb >= 0) {
    const sum =
      la >= 0
        ? Number(a[la--]) + Number(b[lb--]) + step
        : Number(b[lb--]) + step
    const place = sum % 10
    step = Math.floor(sum / 10)
    result.push(place)
  }
  if (step === 1) result.push(1)
  return result.reverse().join('')
}
