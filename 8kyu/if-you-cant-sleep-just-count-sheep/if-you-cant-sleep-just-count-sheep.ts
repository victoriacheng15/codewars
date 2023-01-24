export function countSheep(num: number): string {
  let [res, index] = ["", 0];

  while(index <= num) {
    index === 0 ? '' : (res += `${index} sheep...`);
    index++;
  }

  return res;
}

// or use Array.from
// export function countSheep(num: number): string {
//   return Array.from({length: num}, (_, i) => `${i + 1} sheep...`).join('');
// }