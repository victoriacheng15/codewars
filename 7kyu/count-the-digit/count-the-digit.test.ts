import { describe, expect, it } from "vitest";

export class G964 {
  public static nbDig(n: number, d: number): number {
    let [count, index] = [0, 0];
    while (index <=n) {
      const square = (index ** 2).toString();
      for(const digit of square) {
        if (Number(digit) === d) count++;
      }
      index++;
    }
    return count;
  }
}

describe("count-the-digit", () => {
  const tests = [
    [5750, 0, 4700],
    [11011, 2, 9481],
    [12224, 8, 7733],
  ]

  for(const [n, d, expected] of tests) {
    it(`n = ${n}, d = ${d}, expected = ${expected}`, () => {
      expect(G964.nbDig(n, d)).toBe(expected);
    });
  }
})