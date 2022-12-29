/*  
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

/* 
PREP:
- set a function to map through word and convert first word to uppercase
- use split() to split words with space
- map through upperCase function
- join them with .
*/

function abbrevName(name) {
	const upperCase = (word) => word[0][0].toUpperCase();
	return name.split(" ").map(upperCase).join(".");
}

describe("abbrev name", () => {
	it("should return abbrev name, e.g. P.F", () => {
		expect(abbrevName("Sam Harris")).toEqual("S.H");
		expect(abbrevName("patrick feeney")).toEqual("P.F");
	});
});
