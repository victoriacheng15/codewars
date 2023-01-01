/* 
Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string with the given replace string.

The function will always be called with three strings, so don't worry about validating the arguments.

As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character, effectively inserting replace in-between each character, including the start and end of the string. I've given you some tests for this to make it a little clearer.
*/

/* 
input string
- set up a new RegExp for find parameter and included global flag
- use replace function
- put in the regex and replace parameter
output string
*/

// function replaceAll(input, find, replace) {
//   const regex = new RegExp(find, 'g');
//   return input.replace(regex, replace);
// }

/* 
input string
- early return replace if no input and no find
- early return replace + input + replace if no find
  - this only works for single string, eg 1
  - if the input legnth is longer than 1, use split and join(replace) on the input
- loop through chars
  - check for input based on find length
  - if equal, add replace and then increase i by the find length
  - if not, add the char (input[i])
- return str
output string
*/

function replaceAll(input, find, replace) {
	let str = "";
	if (!(input || find)) return replace;
	if (!find) return replace + input.split("").join(replace) + replace;
	for (let i = 0; i < input.length; i += 1) {
		if (input.slice(i, i + find.length) === find) {
			str += replace;
			i += find.length - 1;
		} else {
			str += input[i];
		}
	}
	return str;
}

describe("replace all", () => {
	it("should return replaced string", () => {
		expect(replaceAll("string-string", "ing", "!")).toBe("str!-str!");
	});

	it("should return replaced string", () => {
		expect(replaceAll("1", "", "-")).toBe("-1-");
	});

	it("should return replaced string", () => {
		expect(replaceAll("123", "", "-")).toBe("-1-2-3-");
	});
});
