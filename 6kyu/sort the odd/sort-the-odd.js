/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

/*
PREP:
- set up array for odd
- filter out even and then sort
- loop through the array
- if the num is odd, replace the num from odd array
- if the num is even, return the even num
*/

function sortArray(array) {
	const odd = array.filter((num) => num % 2).sort((a, b) => a - b);
	return array.map((num) => (num % 2 ? odd.shift() : num));
}
