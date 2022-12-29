/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

/*
PREP:
- check the n
- if less than 2, return 1
- if not, return n * factorial(n-1)
*/

function factorial(n) {
	if (n < 2) return 1;
	return n * factorial(n - 1);
}
