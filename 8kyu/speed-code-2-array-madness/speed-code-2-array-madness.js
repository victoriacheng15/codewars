/* 
PREP:
- set loopCalc fuction
  - power of 2/3 for a/b
  - get sum for both arrays
- return true if a is greater than b
*/

function arrayMadness(a, b) {
	function loopCalc(array, power) {
		return array.map((num) => num ** power).reduce((acc, cur) => acc + cur, 0);
	}
	return loopCalc(a, 2) > loopCalc(b, 3);
}
