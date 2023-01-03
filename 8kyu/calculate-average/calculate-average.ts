export function findAverage(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length || 0
}