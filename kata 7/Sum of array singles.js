function repeats(arr) {
  arr = arr.sort()
  let result = 0,
    point = 0
  console.log(arr)

  while (point < arr.length) {
    if (arr[point] !== arr[point + 1]) {
      result += arr[point]
      point++
    } else {
      point += 2
    }
  }
  return result
}

// solution 2 (without sort)
// function repeats(arr) {
//   let mid = [],
//     result = 0

//   for (let i = 0; i < arr.length; i++) {
//     mid[arr[i]] = mid[arr[i]] ? ++mid[arr[i]] : 1
//   }
//   console.log(mid)
//   for (let i = 0; i < mid.length; i++) {
//     if (mid[i] === 1) result += i
//   }
//   return result
// }
