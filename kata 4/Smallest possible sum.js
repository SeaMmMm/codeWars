function solution(numbers) {
  let gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  // Check if array contains undefined or NaN
  if (numbers.some((number) => number === undefined || isNaN(number))) {
    return NaN;
  }

  return numbers.reduce(gcd) * numbers.length;
}
