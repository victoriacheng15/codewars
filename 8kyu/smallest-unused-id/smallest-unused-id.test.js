import { describe, expect, it } from "vitest";

// function nextId(ids) {
//   let num = 0;
//   while (ids.includes(num)) {
//     num += 1;
//   }
//   return num;
// }

function nextId(ids) {
	const used = new Set(ids);
	for (let i = 0; i <= ids.length; i += 1) {
		if (!used.has(i)) return i;
	}
}

describe("next id", () => {
	it("should return 4 when ids = [0, 1, 2, 3, 5]", () => {
		expect(nextId([0, 1, 2, 3, 5])).toBe(4);
	});

	it("should return 11 when ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
		expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(11);
	});
});
