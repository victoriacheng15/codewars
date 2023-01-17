import { describe, expect, it } from "vitest";

export function divisibleBy(numbers: number[], divisor: number): number[] {
	return numbers.filter(num => num % divisor === 0);
}

describe("divisible by provided divsor", () => {
	const tests: [number[], number, number[]][] = [
		[[1, 2, 3, 4, 5, 6], 2, [2, 4, 6]],
		[[1, 2, 3, 4, 5, 6], 3, [3, 6]],
		[[0, 1, 2, 3, 4, 5, 6], 4, [0, 4]],
	];

  for(const [numbers, divisor, output] of tests) {
    it(`should return [${output}] when numbers = [${numbers}] and divsor = ${divisor}`, () => {
      expect(divisibleBy(numbers, divisor)).toEqual(output)
    })
  }
});
