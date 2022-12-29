/* 
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.
*/

function convertHashToArray(hash) {
	return Object.entries(hash).sort();
}

describe("convert hash to an array", () => {
	it("should return array", () => {
		expect(convertHashToArray({ name: "Jeremy" })).toEqual([
			["name", "Jeremy"],
		]);
	});

	it("should return array", () => {
		expect(
			convertHashToArray({
				name: "Jeremy",
				age: 24,
				role: "Software Engineer",
			}),
		).toEqual([
			["age", 24],
			["name", "Jeremy"],
			["role", "Software Engineer"],
		]);
	});

	it("should return an empty array", () => {
		expect(convertHashToArray({})).toEqual([]);
	});
});
