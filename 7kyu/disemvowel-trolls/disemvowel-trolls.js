/* 
steps:
- regex for vowels
- split sentence into words
- split word into characters 
- remove vowels
- join them
*/

function disemvowel(str) {
	const vowels = /[aeiou]/i;
	const splitStr = str.split(" ");
	const removeVowels = (char) => char.replace(vowels, "");
	return splitStr.map((word) => [...word].map(removeVowels).join("")).join(" ");
}
