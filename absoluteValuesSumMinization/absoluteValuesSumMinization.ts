export function absoluteValuesSumMinimization(a: number[]): number {
    if (!a || a.length === 0) throw new Error("error: input need to a least contain 1 element.");
    if (a.length === 1) return a[0];
    return a[Math.floor((a.length - 1)/2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));