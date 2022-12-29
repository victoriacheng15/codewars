/* 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

/* 
PREP:
- split strings into array for map() function
- set weridCase function for change char to upper or lower case based on index and then join them to become a word
  - even index -> uppercase
  - odd index -> lowercase
- set loopThrough function to map out each word and then join them to become a sentence or word
*/

function toWeirdCase(string) {
	const weirdCase = (char, index) => {
		const isEven = index % 2 === 0;
		return isEven ? char.toUpperCase() : char.toLowerCase();
	};
	const loopThrough = (word) => [...word].map(weirdCase).join("");
	const splitStr = string.split(" ");
	return splitStr.map(loopThrough).join(" ");
}
