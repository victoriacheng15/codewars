/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/*
steps:
- split string and to lower case
- mulitply by index + 1
- capitalize first letter
- join with -
*/

function accum(s) {
	const str = s.toLowerCase();
	const firstLetter = /^[a-z]/g;
	const repeatLetter = (letter, index) => letter.repeat(index + 1);
	const CapFirstChar = (letter) =>
		letter.replace(firstLetter, (char) => char.toUpperCase());
	return [...str].map(repeatLetter).map(CapFirstChar).join("-");
}
