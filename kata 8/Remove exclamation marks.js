function removeExclamationMarks(s) {
  return s
    .split('')
    .filter((v) => v !== '!')
    .join('')
}
