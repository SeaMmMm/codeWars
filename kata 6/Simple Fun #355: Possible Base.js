function possibleBase(exp) {
  const [left, operator, right, equals, result] = exp.split(' ')
  const chars = (left + right + result).split('')
  let minBase = Math.max(...chars.map((char) => parseInt(char, 36))) + 1

  for (let base = minBase; base <= 36; base++) {
    try {
      const leftNum = parseInt(left, base)
      const rightNum = parseInt(right, base)
      const resultNum = parseInt(result, base)

      if (
        (operator === '+' && leftNum + rightNum === resultNum) ||
        (operator === '-' && leftNum - rightNum === resultNum) ||
        (operator === '*' && leftNum * rightNum === resultNum)
      ) {
        return base
      }
    } catch (e) {
      continue
    }
  }

  return -1
}
