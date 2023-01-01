/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

/* 
PREP:
- split string
- use map() fnuction to change first letter of the word to uppercase
- use slice() to add rest of letters
- join them
*/

String.prototype.camelCase = function () {
	return this.split(" ")
		.map((word) => (word[0] || "").toUpperCase() + word.slice(1))
		.join("");
};
