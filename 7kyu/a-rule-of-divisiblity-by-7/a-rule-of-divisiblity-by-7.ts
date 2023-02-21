export function seven(m: number): number[] {
  let time = 0;
  while (`${m}`.length > 2) {
    time += 1;
    m = Math.floor(m / 10) - (m % 10) * 2;
  }

  return [m, time];
}

console.log(seven(1021));