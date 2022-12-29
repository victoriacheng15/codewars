/* 
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
	const counts = {};
	for (const elem of array) {
		counts[elem] = (counts[elem] || 0) + 1;
	}
	return counts;
}
