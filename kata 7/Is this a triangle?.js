function isTriangle(a, b, c) {
  return check(a, b, c) && check(a, c, b) && check(b, c, a)
}

function check(a, b, c) {
  return a + b > c && a - b < c
}
