/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

/*
steps:
- split numbers and convert to number
- find highest number with Math.max()
- find lowest number with Math.min()

dont forget spread operator
apprently Math function takes in strings....
*/

function highAndLow(numbers) {
	const splitNum = numbers.split(" ").map((num) => Number(num));
	const highNum = Math.max(...splitNum);
	const lowNum = Math.min(...splitNum);
	return `${highNum} ${lowNum}`;
}
