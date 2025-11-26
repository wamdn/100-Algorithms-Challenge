export function addTwoDigits(n: any): number {
  const num = Number(n);
  if (Number.isNaN(num)) throw new Error("error: input must be a string or number with 2 digits, such as 10 or 99.");
  if (num < 10 || num > 99) throw new Error("error: input must be between 10 and 99.");

  // Get the first digit using num % 10.
  // Get the second digit using (num - firstDigit) / 10.
  // Return the sum of the two digits.

  // time: O(1)
  // space: O(1) 

  const firstDigit = num % 10;
  const secondDigit = (num - firstDigit) / 10;
  return firstDigit + secondDigit;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(99));
console.log(addTwoDigits(10));
console.log(addTwoDigits('15'));
console.log(addTwoDigits(0));