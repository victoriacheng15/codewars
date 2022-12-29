/* 
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

function hasUniqueChars(str) {
	const hashmap = {};
	const arr = [...str];
	for (const char of arr) {
		hashmap[char] = (hashmap[char] || 0) + 1;
	}

	for (const char in hashmap) {
		if (hashmap[char] > 1) return false;
	}

	return true;
}

describe("has unique chars", () => {
	it("should return a boolean value", () => {
		expect(hasUniqueChars("  nAa")).toBe(false);
	});

	it("should return a boolean value", () => {
		expect(hasUniqueChars("abcdef")).toBe(true);
	});
	it("should return a boolean value", () => {
		expect(hasUniqueChars("++-")).toBe(false);
	});
});
