// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// time: O(n)
// space: O(1)
export function almostIncreasingSequence(sequence: number[]): boolean {
  // Find the blocking element in the sequence using different criteria depending on whether
  // the element is at the start, in the middle, or at the end.
  const blockingElemIdx = blockingElementAt(sequence)
  // console.log({ val: sequence[blockingElemIdx], at: blockingElemIdx });

  // Loop through the sequence while skipping blockingElemIdx, 
  // and check whether the sequence is strictly increasing. 
  // If not, return false; otherwise, return true.  
  let isValid = true; 
  let prevI = blockingElemIdx === 0 ? 1 : 0;
  let i = prevI + 1;
  while (isValid && i < sequence.length) {
    if (blockingElemIdx !== i) {
      // console.log(sequence[prevI],sequence[i])
      isValid = sequence[i] > sequence[prevI];
      prevI = i;
    } 
    i++;
  }
  return isValid;
}

// Find the index of the blocking element, or return -1 if none is found.
function blockingElementAt(sequence: number[]) {
  if (sequence.length < 3) return 0;

  if (_isBlockingElemAtStart(sequence)) return 0;
  if (_isBlockingElemAtEnd(sequence)) return sequence.length-1;

  let index = -1;
  let i = 1;
  while (index === -1 && i < sequence.length - 1) {
    if (_isBlockingElemAtMid(sequence, i)) 
      index = i;
    i++;
  }
  return index;
}

// Return true if the blocking element is at the start
// The sequence array must contain at least 3 elements
function _isBlockingElemAtStart(sequence: number[]) {
  return sequence[0] > sequence[1] && sequence[0] > sequence[2];
}

// Return true if the blocking element is at the end.
// The sequence array must contain at least 3 elements.
function _isBlockingElemAtEnd(sequence: number[]) {
  const lastIdx = sequence.length-1;
  return (
    sequence[lastIdx] < sequence[lastIdx-1] && 
    sequence[lastIdx] < sequence[lastIdx-2]
  );
}

// Return true if the blocking element is in the middle.
// The element is blocking if it is either too small or too large
// compared to its immediate neighbors.
function _isBlockingElemAtMid(sequence: number[], curIndex: number) {
  // Blocking because it is too small.
  const isTooSmall = 
    sequence[curIndex] < sequence[curIndex-1] && 
    sequence[curIndex] < sequence[curIndex+1];

  // Blocking because it is too large.
  const isTooLarge = 
    sequence[curIndex] > sequence[curIndex-1] && 
    sequence[curIndex] > sequence[curIndex+1];

  return isTooSmall || isTooLarge;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 2, 5, 3])) 
console.log(almostIncreasingSequence([1, 2, 5, 2])) 
console.log(almostIncreasingSequence([5, 2, 3, 4])) 
console.log(almostIncreasingSequence([2, 3, 4, 1])) 