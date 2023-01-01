/* 
You are to write an function that takes a string as it's first paramter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

Simple. Good luck.
*/

/* 
input - string (sentence), loc (num), num (num)
- split str into array
- get the word with stringArr[loc]
- use new Array to get the length from num
- fill with the word
- join them with '-'
output - string
*/

function modifyMultiply(str, loc, num) {
	const stringArr = str.split(" ");
	const multiplyWord = new Array(num).fill(stringArr[loc]).join("-");
	return multiplyWord;
}

describe("multiply string", () => {
	it("should return the string based on location and then multiply by num", () => {
		expect(modifyMultiply("This is a string", 3, 5)).toBe(
			"string-string-string-string-string",
		);
	});

	it("should return the string based on location and then multiply by num", () => {
		expect(
			modifyMultiply(
				"Creativity is the process of having original ideas that have value. It is a process; it's not random.",
				8,
				10,
			),
		).toBe("that-that-that-that-that-that-that-that-that-that");
	});
});
