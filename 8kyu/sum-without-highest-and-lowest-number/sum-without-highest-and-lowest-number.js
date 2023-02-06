/* 
PREP:
- set the condition
- set sum function
- check the condition
   - if true, calc the sum of the array and then minus highest and lowest numbers
   - if false, return 0
*/

function sumArray(array) {
	const condition = Array.isArray(array) && array.length > 1;
	const sum = (acc, cur) => acc + cur;
	return condition
		? array.reduce(sum, 0) - Math.min(...array) - Math.max(...array)
		: 0;
}
