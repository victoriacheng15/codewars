/* 
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

function makeString(s) {
	const getFirstChar = (word) => word.slice(0, 1);
	return s.split(" ").map(getFirstChar).join("");
}

describe("make string", () => {
	it("should return first character of every word in the sentence", () => {
		expect(makeString("sees eyes xray yoat")).toBe("sexy");
	});

	it("should return first character of every word in the sentence", () => {
		expect(makeString("brown eyes are nice")).toBe("bean");
	});
});
