/* 
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

/* 
PREP:
- set score = 0
- use while loop
- add n to score
- set n = Math.floor(n/2) (this is to get the half of the n)
- repeat until n reach 1
*/

function halvingSum(n) {
	let score = 0;
	while (n >= 1) {
		score += n;
		n = Math.floor(n / 2);
	}
	return score;
}
