/* 
PREP:
- use slice to remove first and last character
*/

function removeChar(str) {
	return str.slice(1, str.length - 1);
}
