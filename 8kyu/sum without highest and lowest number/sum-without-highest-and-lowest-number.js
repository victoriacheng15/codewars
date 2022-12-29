/* 
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. 
*/

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
