/* 
PREP:
- split sentence into word with space
- reverse the array
- join them with space
*/

function reverseWords(str) {
	return str.split(" ").reverse().join(" ");
}
