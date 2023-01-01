/* 
Your task is very simple:
Write a function hasOneChar returning:

true if the given string contains the same character repeated all along the string
false otherwise.
For instance:

hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false
Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.
You have to achieve it without using any loops.

Corner cases: the function hasOneChar should return true if the string contains one single character.
*/

// function hasOneChar(s) {
//   // const first = s.slice(0, 1);
//   // for (let i = 1; i < s.length; i += 1) {
//   //   const current = s[i];
//   //   if (first !== current) return false;
//   // }
//   // return true;
//   return [...new Set(s)].length <= 1;
// }

// or use regex

function hasOneChar(s) {
	const regex = /^(.)\1*$/g;
	return regex.test(s);
}

describe("has one char?", () => {
	it("should return a boolean value", () => {
		expect(hasOneChar("aaaaa")).toBe(true);
	});

	it("should return a boolean value", () => {
		expect(hasOneChar("bbabb")).toBe(false);
	});
});
