/* 
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
*/

// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > strarr.length || k <= 0) return '';

//   const combinedStr = strarr.map((_, idx) =>
//     strarr.slice(idx, idx + k).join('')
//   );
//   const maxLen = Math.max(...combinedStr.map((el) => el.length));

//   const longestStr = combinedStr.filter((el) => el.length === maxLen)[0];

//   return longestStr;
// }

// function longestConsec(strarr, k) {
//   const { length } = strarr;
//   if (length === 0 || k > length || k <= 0) return '';

//   let [newStr, longestStr] = ['', ''];
//   for (let i = 0; i < length; i += 1) {
//     newStr = strarr.slice(i, i + k).join('');

//     if (newStr.length > longestStr.length) {
//       longestStr = newStr;
//     }
//   }

//   return longestStr;
// }

function longestConsec(strarr, k) {
	const { length } = strarr;
	if (length === 0 || k > length || k <= 0) return "";

	return strarr.reduce((longestStr, _, index) => {
		const combinedStr = strarr.slice(index, index + k).join("");
		return combinedStr.length > longestStr.length ? combinedStr : longestStr;
	}, "");
}

describe("consecutive string", () => {
	const cases = [
		[["zone", "abigail", "theta", "form", "libe", "zas"], 2, "abigailtheta"],
		[
			[
				"ejjjjmmtthh",
				"zxxuueeg",
				"aanlljrrrxx",
				"dqqqaaabbb",
				"oocccffuucccjjjkkkjyyyeehh",
			],
			1,
			"oocccffuucccjjjkkkjyyyeehh",
		],
		[
			["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
			2,
			"wlwsasphmxxowiaxujylentrklctozmymu",
		],
		[["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15, ""],
		[["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0, ""],
		[["zone", "abigail", "theta", "form", "libe", "zas"], -2, ""],
	];

	for (const [arr, k, output] of cases) {
		it(`should return ${
			output || "empty string"
		} when arr = [${arr}] and k = ${k}`, () => {
			const input = longestConsec(arr, k);
			expect(input).toBe(output);
		});
	}
});
