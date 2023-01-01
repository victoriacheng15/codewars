/* 
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6] 
*/

/* 
PREP:
- use % to find which numbers are divisible
  - num % divisor
- if the reminder = 0, then the num is divisible
- use filter()
*/

function divisibleBy(numbers, divisor) {
	return numbers.filter((num) => num % divisor === 0);
}
