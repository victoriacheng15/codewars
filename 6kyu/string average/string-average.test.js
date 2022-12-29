/* 
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

// function averageString(str) {
//   const str2Num = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   const num2Str = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     NaN: 'n/a',
//   };
//   const strArr = str.split(' ');
//   const average =
//     strArr.reduce((acc, curr) => acc + str2Num[curr], 0) / strArr.length;

//   return num2Str[Math.floor(average)];
// }

function averageString(str) {
	const str2Num = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};

	const strArr = str.split(" ");
	const average =
		strArr.reduce((acc, curr) => acc + str2Num[curr], 0) / strArr.length;
	const result = Object.keys(str2Num)[Math.floor(average)];

	return result || "n/a";
}
describe("average string", () => {
	const cases = [
		["zero nine five two", "four"],
		["four six two three", "three"],
		["one two three four five", "three"],
		["five four", "four"],
		["zero zero zero zero zero", "zero"],
		["one one eight one", "two"],
		["", "n/a"],
	];
	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str || "empty string"}`, () => {
			const input = averageString(str);
			expect(input).toBe(output);
		});
	}
});
