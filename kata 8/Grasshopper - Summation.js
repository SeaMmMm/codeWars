var summation = function (num) {
  if (num === 1) {
    return num
  } else {
    return num + summation(num - 1)
  }
}
