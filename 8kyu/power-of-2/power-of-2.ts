// export function powersOfTwo(n:number):number[]{
//   const res:number[] = []
//   for (let i = 0; i <= n; i++) {
//     res.push(2 ** i)
//   }

//   return res
// }

export function powersOfTwo(n: number): number[] {
  return [...Array(n + 1).keys()].map((num) => 2 ** num);
}

console.log(powersOfTwo(2));
console.log(powersOfTwo(4));
