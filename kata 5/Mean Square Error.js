var solution = function (firstArray, secondArray) {
  let result = 0

  for (let i = 0; i < firstArray.length; i++) {
    result += Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2)
  }

  return result / firstArray.length
}
