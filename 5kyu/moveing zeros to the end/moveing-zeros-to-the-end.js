/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

/* 
PREP:
- use filter function to get zeroes
- filter again for non zero values
- combine them with spread operator
*/

function moveZeros(arr) {
	const zeros = arr.filter((value) => value === 0);
	const nonZeros = arr.filter((value) => value !== 0);
	return [...nonZeros, ...zeros];
}
