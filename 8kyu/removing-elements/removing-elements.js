/* 
PREP：
- use filter() function
- check index and filter out any odd index
*/

function removeEveryOther(arr) {
	return arr.filter((_, index) => index % 2 === 0);
}
