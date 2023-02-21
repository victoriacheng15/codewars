import { describe, expect, it } from "vitest";

function seven(m) {
	let time = 0;
	while (`${m}`.length > 2) {
		time += 1;
		m = Math.floor(m / 10) - (m % 10) * 2;
	}

	return [m, time];
}

describe("a rule of divisiblity by 7", () => {
	it("should return [10, 2] when m = 1021", () => {
		expect(seven(1021)).toEqual([10, 2]);
	});

	it("should return [7, 2] when m = 1603", () => {
		expect(seven(1603)).toEqual([7, 2]);
	});
});
