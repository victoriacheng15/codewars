/* 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

/* 
PREP:
- set regex to fnid !
- use replace() to remove exclamation mark
*/

function removeExclamationMarks(s) {
	const regex = /[!]/g;
	return s.replace(regex, "");
}
