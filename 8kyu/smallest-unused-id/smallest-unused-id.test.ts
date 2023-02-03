import { describe, expect, it } from "vitest";

export function nextId(ids: number[]): number {
	const used = new Set(ids);
  let num = 0;

  // while (used.has(num)) {
  //   num++;
  // }

	for (const id of ids) {
    if (id === num) {
      num++;
    }
  }

  return num;
}

describe("next id", () => {
	it("should return 4 when ids = [0, 1, 2, 3, 5]", () => {
		expect(nextId([0, 1, 2, 3, 5])).toBe(4);
	});

	it("should return 11 when ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
		expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(11);
	});
});
