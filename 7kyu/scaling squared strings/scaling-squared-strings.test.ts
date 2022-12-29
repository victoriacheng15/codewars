/* 
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
*/

export const scale = (s: string, k: number, n: number): string => {
	if (s === "") {
		return "";
	}

	const squaredChar = (word: string) =>
		[...word].map((char) => char.repeat(k)).join("");

	const repeatVertical = (word: string) => new Array(n).fill(word).join("\n");

	return s.split("\n").map(squaredChar).map(repeatVertical).join("\n");
};

describe("scaling sqaured string", () => {
	const cases: [string, number, number, string][] = [
		["Kj\nSH", 1, 2, "Kj\nKj\nSH\nSH"],
		[
			"abcd\nefgh\nijkl\nmnop",
			2,
			3,
			"aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp",
		],
		["WgaB\nMmIn\nqJwv\nAhho", 2, 1, "WWggaaBB\nMMmmIInn\nqqJJwwvv\nAAhhhhoo"],
	];

	for (const [s, k, v, output] of cases) {
		it(`should return ${output} when s = ${s}, k = ${k}, and v = ${v}`, () => {
			const input = scale(s, k, v);
			expect(input).toBe(output);
		});
	}
});
