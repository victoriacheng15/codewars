/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

/* 
note:
use Euclidean algorithm
https://www.freecodecamp.org/news/how-to-use-the-euclidean-algorithm-to-find-the-greatest-common-divisor-gcd/
*/

function mygcd(x, y) {
	let r;
	while (x % y > 0) {
		r = x % y;
		x = y;
		y = r;
	}
	return y;
}
