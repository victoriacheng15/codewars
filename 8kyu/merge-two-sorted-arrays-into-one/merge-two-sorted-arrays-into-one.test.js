import { describe, it, expect } from "vitest";

/* 
PREP:
- merge both arrays
- get rid of duplications if there are any
- sort them in the numerical order
*/

function mergeArrays(arr1, arr2) {
	const finalArr = [...new Set([...arr1, ...arr2])];
	return finalArr.sort((a, b) => a - b);
}

describe("mergeArrays", () => {
	it("should merge two arrays", () => {
		const arr1 = [1, 2, 3];
		const arr2 = [4, 5, 6];
		expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
