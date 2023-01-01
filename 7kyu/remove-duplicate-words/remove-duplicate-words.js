/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

/*
PREP:
- split strings into array
- use new Set() to remove duplicate words
- convert it to array with spread operator
- join them together with space

or
- use while loop
- set noDuplicate array
- set i = 0
- convert sentence to array
- loop through words
- check to see if the noDuplicate has the word or not,
- if not, push the word
- if yes, no push
- return the noDuplicate array and join them
*/

function removeDuplicateWords(s) {
	const array = s.split(" ");
	return [...new Set(array)].join(" ");
	// const noDuplicate = [];
	// const array = s.split(' ');
	// let i = 0;
	// while (i < array.length) {
	//   if (!noDuplicate.includes(array[i])) {
	//     noDuplicate.push(array[i]);
	//   }
	//   i += 1;
	// }
	// return noDuplicate.join(' ');
}
