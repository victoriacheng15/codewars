/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/*
PREP:
- split sentence to Array
- check each word length
- if less than 5, return word else return reversed word
*/

function spinWords(string) {
	const sentence = string.split(" ");
	const reverseOrNot = (word) => {
		const wordArr = [...word];
		const checkLength = wordArr.length < 5 ? word : wordArr.reverse().join("");
		return checkLength;
	};
	return sentence.map(reverseOrNot).join(" ");
}
