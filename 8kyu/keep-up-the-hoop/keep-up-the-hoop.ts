export function hoopCount(n: number): string {
  return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
}

console.log(hoopCount(6))
console.log(hoopCount(10))