/* 
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

function checkForFactor(base, factor) {
	return !(base % factor);
}

describe("check for factor", () => {
	it("should return true when base = 10 and factor = 2", () => {
		expect(checkForFactor(10, 2)).toBe(true);
	});

	it("should return true when base = 63 and factor = 7", () => {
		expect(checkForFactor(63, 7)).toBe(true);
	});

	it("should return false when base = 653 and factor = 7", () => {
		expect(checkForFactor(653, 7)).toBe(false);
	});

	it("should return false when base = 9 and factor = 2", () => {
		expect(checkForFactor(9, 2)).toBe(false);
	});
});
