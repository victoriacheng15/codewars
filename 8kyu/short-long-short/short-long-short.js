/* 
PREP:
- get a and b length
- check a > b based on length
- if true, bab
- if false, aba
- use template literal to return value
*/

function solution(a, b) {
	return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}
