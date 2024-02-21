function snail(array) {
  let result = []
  while (array.length) {
    // Add the first row
    result = result.concat(array.shift())

    // Add the last element of each row
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop())
    }

    // Add the last row in reverse order
    if (array.length) {
      result = result.concat(array.pop().reverse())
    }

    // Add the first element of each row in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift())
    }
  }
  return result
}
