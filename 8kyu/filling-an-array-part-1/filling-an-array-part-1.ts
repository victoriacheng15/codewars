export const arr = (n: number = 0): number[] => [...new Array(n).keys()];


console.log(arr(4));
console.log(arr());