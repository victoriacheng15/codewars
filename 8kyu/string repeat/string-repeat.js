/* 
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

/* 
PREP:
- set str to empty
- use for loop to add s to str
- return str 
*/

function repeatStr(n, s) {
	let str = "";
	for (let i = 0; i < n; i += 1) {
		str += s;
	}
	return str;
}
