function moveZeros(arr) {
  const zeroArr = [],
    result = [];
  for (const word of arr) {
    if (word !== 0) result.push(word);
    else zeroArr.push(word);
  }
  return result.concat(zeroArr);
}
