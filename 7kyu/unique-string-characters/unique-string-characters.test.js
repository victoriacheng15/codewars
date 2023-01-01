/* 
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
*/

function solve(a, b) {
	const str1 = [...a].filter((char) => ![...b].includes(char)).join("");
	const str2 = [...b].filter((char) => ![...a].includes(char)).join("");
	return str1 + str2;
}

describe("unique string character", () => {
	it("should return unique characters", () => {
		expect(solve("xyab", "xzca")).toBe("ybzc");
	});

	it("should return unique characters", () => {
		expect(solve("abcd", "xyz")).toBe("abcdxyz");
	});
});
