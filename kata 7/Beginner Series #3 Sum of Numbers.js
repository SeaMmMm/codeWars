function getSum(a, b) {
  if (a > b) [a, b] = [b, a];
  if (a === b) return a;

  for (var i = a, res = 0; i <= b; i++) {
    res += i;
  }

  return res;
}
