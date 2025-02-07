function nextBigger(n) {
  const digits = Array.from(n.toString()).map(Number);
  let i = digits.length - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i === -1) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).reverse();
  const result = parseInt([...left, ...right].join(''));

  return result;
}
