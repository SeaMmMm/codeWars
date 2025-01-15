function squareDigits(num) {
  let arr = num.toString().split(''),
    str = '';
  for (const num of arr) {
    str += Math.pow(+num, 2);
  }

  return +str;
}
