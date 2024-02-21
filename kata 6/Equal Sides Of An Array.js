function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    const left = arr.slice(0, idx).reduce((acc, val) => acc + val, 0)
    const right = arr.slice(idx + 1).reduce((acc, val) => acc + val, 0)

    if (left === right) return idx
  }
  return -1
}
