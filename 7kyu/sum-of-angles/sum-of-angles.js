/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

/*
PREP:
- use this formula (n - 2) * 180

note:
https://www.cuemath.com/sum-of-angles-formula/
*/

function angle(n) {
	return (n - 2) * 180;
}
