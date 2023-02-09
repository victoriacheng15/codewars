// export function between(a: number, b: number): number[] {
//   const res: number[] = []
//   let index = a
//   while (index <= b) {
//     res.push(index)
//     index++
//   }

//   return res
// }

export function between(a: number, b: number): number[] {
  return [...Array(b - a +1).keys()].map(i => a + i)
}

console.log(between(-2, 2))