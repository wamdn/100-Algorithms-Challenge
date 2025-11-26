export function addBorder(picture: string[]): string[] {
  // time: O(n)
  // space: O(n)
  if (picture.length === 0) throw new Error("error: input cannot be a empty array.");
  const borderedPic = new Array(picture.length + 2);
  const borderStr = '*'.repeat(picture[0].length + 2)
  borderedPic[0] = borderStr;
  borderedPic[borderedPic.length-1] = borderStr;
  for (let i = 0; i < picture.length; i++) {
    borderedPic[i + 1] = '*' + picture[i] + '*';
  }
  return borderedPic;
}

console.log(addBorder(["abc"]));
console.log(addBorder(["abc", "ded"]));