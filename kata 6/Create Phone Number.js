function createPhoneNumber(numbers) {
  return `(${numbers.splice(0, 3).join('')}) ${numbers
    .splice(0, 3)
    .join('')}-${numbers.splice(0).join('')}`;
}
