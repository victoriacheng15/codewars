/* 
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// string roman numeral into an integer
// convert string roman numeral into an integers
// return the integer

function solution(roman) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const others = ["CD", "CM", "XC", "XL", "IX", "IV"];

	// let result = 0;
	// [...roman].map((letter, index) => {
	//   const next = roman[index + 1];
	//   others.indexOf(letter + next) === -1
	//     ? (result += romanMap[letter])
	//     : (result -= romanMap[letter]);
	// });
	// return result;
	return [...roman].reduce((total, letter, index) => {
		const next = roman[index + 1];
		return others.indexOf(letter + next) === -1
			? (total += romanMap[letter])
			: (total -= romanMap[letter]);
	}, 0);
}

describe("roman numberals decoder", () => {
	it("should return 0 for empty string", () => {
		expect(solution("")).toEqual(0);
	});

	it("should return 21 for XXI", () => {
		expect(solution("XXI")).toEqual(21);
	});

	it("should return 4 for IV", () => {
		expect(solution("IV")).toEqual(4);
	});

	it("should return 2008 for MMVIII", () => {
		expect(solution("MMVIII")).toEqual(2008);
	});
});
