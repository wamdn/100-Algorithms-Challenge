export function allLongestStrings(inputArray: string[]): string[] {
  if (!inputArray) throw new Error("error: inputArray must be of type array of string.");
  if (inputArray.length === 0) return [] as string[]; 

  // Loop through InputArray and find the longest string and how much string of this length are present.
  // Create a new array with size of the longest string count
  // Loop again through InputArray and add each element with the longest string length.
  // return the new array

  // time: O(n)
  // space: O(n)

  const longestStrData = { size: 0, count: 0 };
  for (let i = 0; i < inputArray.length; i++) {
    const currStrSize = inputArray[i].length;
    if (longestStrData.size < currStrSize) {
      longestStrData.count = 1;
      longestStrData.size = currStrSize;
    } else if (longestStrData.size === currStrSize) {
      longestStrData.count++
    }
  }

  const longestStrArray = new Array(longestStrData.count);
  let longestStrArrayPos = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestStrData.size) {
      longestStrArray[longestStrArrayPos] = inputArray[i];
      longestStrArrayPos++;
    }
  }

  return longestStrArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aa", "ad", "aba"]));
console.log(allLongestStrings(["aa", "ad", "a"]));
console.log(allLongestStrings(["aa"]));
console.log(allLongestStrings([]));
console.log(allLongestStrings(null));