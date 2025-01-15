const reverseSeq = (n) => {
  const arr = [];
  let i = 0;
  while (n > 0) {
    arr[i++] = n--;
  }
  return arr;
};
