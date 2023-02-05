export function sumMix(x: any[]): number {
  return x.map(Number).reduce((acc, curr) => acc + curr, 0)
}
