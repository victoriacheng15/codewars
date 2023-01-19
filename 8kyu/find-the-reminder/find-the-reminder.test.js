import { describe, it, expect } from "vitest";

// reminder calculating, 17 / 5 =  3 => 3 * 5 = 15 => 17 - 15 = 2, 2 is the reminder

function remainder(n, m) {
	if (n < m) [n, m] = [m, n];
	return n % m;
}

describe("find the reminder", () => {
	const tests = [
		[[17, 5], 2],
		[[13, 72], 7],
	];
	
	for(const [n, m] of tests) {
		it(`should return ${remainder(n, m)}`, () => {
			expect(remainder(n, m)).toBe(remainder(n, m));
		});
	}
});
