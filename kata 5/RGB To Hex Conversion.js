const hex = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
}
function mul(number) {
  if (number < 0) number = 0
  if (number > 255) number = 255

  const a = Math.floor(number / 16)
  const b = number - 16 * a

  return `${hex[a] || a}${hex[b] || b}`
}

function rgb(r, g, b) {
  return mul(r) + mul(g) + mul(b)
}
