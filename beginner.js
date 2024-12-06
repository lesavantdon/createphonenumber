function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || !numbers.every(num => num >= 0 && num <= 9)) {
    throw new Error("Input must be an array of 10 integers between 0 and 9.");
  }

  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}
