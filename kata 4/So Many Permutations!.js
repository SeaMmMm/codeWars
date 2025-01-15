function permutations(string) {
  const result = [];
  permute(string.split(''), 0, string.length - 1, result);
  return Array.from(new Set(result));
}

function permute(arr, l, r, result) {
  if (l === r) {
    result.push(arr.join(''));
  } else {
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]];
      permute(arr, l + 1, r, result);
      [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
    }
  }
}
