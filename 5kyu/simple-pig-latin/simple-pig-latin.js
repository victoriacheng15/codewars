/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

/* 
PREP:
- set array for split str
- set regex to check for letters
- set function for convert word to pig latin
- map through word in the array with toLatin function
- lastly, join them with space
*/

function pigIt(str) {
	const regex = /[a-z]/gi;
	const ayStr = "ay";
	function toLatin(word) {
		const checkWord = word.match(regex);
		const convertWord = `${word.slice(1)}${word[0]}${ayStr}`;
		return checkWord ? convertWord : word;
	}
	return str.split(" ").map(toLatin).join(" ");
}
