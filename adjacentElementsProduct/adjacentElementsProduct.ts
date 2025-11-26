export function adjacentElementsProduct(inputArray: number[]): number {
  if (!inputArray) throw new Error("error: input array must be of type array of numbers with at least 2 elements.");
  if (inputArray.length < 2) throw new Error("error: input array need to contain at least 2 elements.");

  // Create a variable maxProduct with the value equal to the product of the first and second elements of inputArray.
  // Loop through inputArray starting at index 2, and calculate the product of the current element and the previous one.
  // Update maxProduct if the current product is greater.
  // Return maxProduct.

  // time: O(n)
  // space: O(1)

  let maxProduct = inputArray[0] * inputArray[1];
  for (let i = 2; i < inputArray.length; i++) {
    const prod = inputArray[i-1] * inputArray[i];
    if (prod > maxProduct) maxProduct = prod;
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));