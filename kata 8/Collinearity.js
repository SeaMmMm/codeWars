function collinearity(x1, y1, x2, y2) {
  if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) return true

  const v1 = y1 / x1,
    v2 = y2 / x2
  if (v1 === v2) return true
  else if (isNaN(v1) && isNaN(v2)) return true
  else return false
}
