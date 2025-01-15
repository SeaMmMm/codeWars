function persistence(num) {
  let str = num.toString(),
    temp = 0;

  if (str.length === 1) return 0;

  while (str.length !== 1) {
    str = str
      .split('')
      .reduce((acc, num) => acc * num, 1)
      .toString();
    temp++;
  }

  return temp;
}
