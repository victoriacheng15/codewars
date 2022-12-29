/* 
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)
*/

function firstNonRepeated(s) {
	for (let i = 0; i < s.length; i += 1) {
		const current = s[i];
		if (s.indexOf(current) === s.lastIndexOf(current)) {
			return current;
		}
	}
	return null;
}

describe("first non repeated", () => {
	it("should return first non-repeated char", () => {
		expect(firstNonRepeated("teeter")).toBe("r");
	});

	it("should return first non-repeated char", () => {
		expect(firstNonRepeated("trend")).toBe("t");
	});
});
