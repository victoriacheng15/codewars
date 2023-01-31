/* 
PREP:
- set regex to fnid !
- use replace() to remove exclamation mark
*/

function removeExclamationMarks(s) {
	const regex = /[!]/g;
	return s.replace(regex, "");
}
