/* 
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.n
*/

/* 
PREP:
- convert digits to array
- set max 0
- set currentNum = 0
- loop through number based on 5 legnth
- if currentNum is greater that max, convert currentNum to max
*/

function solution(digits) {
	const numbers = [...`${digits}`];
	let max = 0;
	let currentNum = 0;
	for (let i = 0; i < numbers.length - 4; i += 1) {
		currentNum = Number(numbers.slice(i, i + 5).join(""));
		if (currentNum > max) {
			max = currentNum;
		}
	}
	return max;
}
