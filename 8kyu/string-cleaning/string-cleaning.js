/* 
PREP:
- set regex to detect all numbers
- use replace() to get rid of all numbers
*/

function stringClean(s) {
	const regex = /[0-9]/g;
	return s.replace(regex, "");
}
