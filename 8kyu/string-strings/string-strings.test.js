/* 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
	const arr = [...new Array(size).fill(0)].slice(0);
	return arr.map((_, index) => (index % 2 ? "0" : "1")).join("");
}

describe("stringy", () => {
	it("should return binary number based on size", () => {
		expect(stringy(6)).toEqual("101010");
	});
});
