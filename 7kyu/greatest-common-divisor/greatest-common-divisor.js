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
