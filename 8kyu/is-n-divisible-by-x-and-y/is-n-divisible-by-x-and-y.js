/* 
PREP:
- use reminder % to check n and y
- if both are true, return true
- if not, return false
*/

function isDivisible(n, x, y) {
	return !!(n % x === 0 && n % y === 0);
}
