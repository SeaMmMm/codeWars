function solution(number) {
  if (number < 0) return 0
  const set = new Set()
  let n1 = (n2 = number),
    i = 1

  while (n1 > 3 * i && n2 > 5 * i) {
    set.add(3 * i)
    set.add(5 * i)
    i++
  }

  while (n1 > 3 * i) {
    set.add(3 * i)
    i++
  }

  while (n2 > 5 * i) {
    set.add(5 * i)
    i++
  }

  return [...set].reduce((acc, val) => acc + val, 0)
}
