export function grow(arr: number[]): number {
  return arr.reduce((acc, curr) => acc * curr, 1);
}