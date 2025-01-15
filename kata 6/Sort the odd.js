function sortArray(array) {
  let odd = [],
    even = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) odd.push(array[i]);
    else even[i] = array[i];
  }

  odd.sort((a, b) => a - b);
  let idx = 0;
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 !== 0) even[i] = odd[idx++];
  }

  return even;
}
