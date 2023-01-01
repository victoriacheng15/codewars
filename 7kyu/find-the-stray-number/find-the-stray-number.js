/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

/*
PREP:
- sort the number array
- compare first and 2nd items of the array
- if both are the same, remove the 2nd item
- repeat until both are not the same, remove the first item.
*/

function stray(numbers) {
	const sorted = numbers.sort((a, b) => a - b);
	return sorted[0] === sorted[1] ? sorted.pop() : sorted.shift();
}
