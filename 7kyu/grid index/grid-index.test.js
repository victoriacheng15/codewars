/* 
You are given an n by n ( square ) grid of characters, for example:

[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input, for example:

[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the indexes as:

[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.

Then you output a string like this:

"meal"
All inputs will be valid.
*/

/* 
input grid - array with subarray, indices - array
- flat grid array
- map out string based on the indices
- join letters
output string 
*/

function gridIndex(grid, indices) {
	const flattedArray = grid.reduce((acc, subArr) => {
		if (Array.isArray(subArr)) return acc.concat(subArr);
		return acc;
	}, []);

	const getLetter = (indice) => flattedArray[indice - 1];

	return indices.map(getLetter).join("");
}

describe("grid index", () => {
	it("should return myexample based on provided indices", () => {
		const matrix = [
			["m", "y", "e"],
			["x", "a", "m"],
			["p", "l", "e"],
		];
		const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		expect(gridIndex(matrix, indices)).toBe("myexample");
	});

	it("should return mam based on provided indices", () => {
		const matrix = [
			["m", "y", "e"],
			["x", "a", "m"],
			["p", "l", "e"],
		];
		const indices = [1, 5, 6];
		expect(gridIndex(matrix, indices)).toBe("mam");
	});

	it("should return ooelccddrr based on provided indices", () => {
		const matrix = [
			["h", "e", "l", "l"],
			["o", "c", "o", "d"],
			["e", "w", "a", "r"],
			["r", "i", "o", "r"],
		];
		const indices = [5, 7, 9, 3, 6, 6, 8, 8, 16, 13];
		expect(gridIndex(matrix, indices)).toBe("ooelccddrr");
	});
});
