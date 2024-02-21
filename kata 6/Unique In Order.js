var uniqueInOrder = function (iterable) {
  const len = iterable.length
  let l = 0,
    r = 0
  const result = []
  while (r <= len) {
    if (iterable[l] !== iterable[r]) {
      result.push(iterable[l])
      l = r
      r++
    } else {
      r++
    }
  }
  return result
}
