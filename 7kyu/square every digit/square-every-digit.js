/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

/*
steps:
- convert number to string and then split
- use map to return power of 2 for each number
- join them together
- convert back to number

note: split() only works on string, not number
*/

function squareDigits(num) {
	return Number([...num.toString()].map((number) => number ** 2).join(""));
}
