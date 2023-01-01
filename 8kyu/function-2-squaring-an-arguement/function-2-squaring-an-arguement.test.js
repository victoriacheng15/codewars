/* 
Now you have to write a function that takes an argument and returns the square of it.
*/

function square(num) {
	return num ** 2;
}

describe("square", () => {
	it("should return the square of the number", () => {
		expect(square(3)).toEqual(9);
	});
});
