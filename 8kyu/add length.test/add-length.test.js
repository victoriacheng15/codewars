/* 
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

/* 
PREP：
- input is string
- split the parameter into array
- get the legnth of the string
- add number with the string with space
- output is array
*/

function addLength(str) {
	const array = str.split(" ");
	return array.map((word) => `${word} ${word.length}`);
}

describe("add length", () => {
	it("should return an array of string with bane and length", () => {
		expect(addLength("apple ban")).toEqual(["apple 5", "ban 3"]);
		expect(addLength("you will win")).toEqual(["you 3", "will 4", "win 3"]);
	});
});
