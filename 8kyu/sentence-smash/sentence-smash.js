/* 
PREP:
- check array length
- if zero, return empty string
- if not, join words with space
*/

function smash(words) {
	return words.length ? words.join(" ") : "";
}
