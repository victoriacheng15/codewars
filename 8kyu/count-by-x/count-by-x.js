/* 
PREP:
- set array = []
- get length with x * n
- use for...loop
- if i is dividable by x, push to array
- if not, dont push
- returne array
*/

function countBy(x, n) {
	let array = [];
	for (let i = 1; i <= x * n; i += 1) {
		if (i % x === 0) array.push(i);
	}
	return array;
}
