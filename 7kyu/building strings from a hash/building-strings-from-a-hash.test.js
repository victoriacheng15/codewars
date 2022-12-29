/* 
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs) {
	return Object.keys(pairs)
		.map((value) => `${value} = ${pairs[value]}`)
		.join(",");
}

describe("building strings from a hash", () => {
	const cases = [
		[{ a: 1, b: "2" }, "a = 1,b = 2"],
		[{ a: 3, b: "1" }, "a = 3,b = 1"],
		[{ a: "2", b: "6" }, "a = 2,b = 6"],
		[{ a: "hello", b: "hash" }, "a = hello,b = hash"],
	];

	for (const [obj, output] of cases) {
		const displayObj = JSON.stringify(obj);
		it(`should return ${output} when obj = ${displayObj}`, () => {
			expect(solution(obj)).toBe(output);
		});
	}
});
