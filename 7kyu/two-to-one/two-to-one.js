/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/*
PREP:
- combine s1 and s2
- use new Set() to filter out any repeated letters
- use || operator as a fallback if s2 is not there
- push letter to newArr
- sort and then join them

note:
apprently that Set() will return object intead of array. So it needs to use forEach to push letter into array first.
OR use spread operator/Array.from
*/

function longest(s1, s2) {
	const newArr = [];
	new Set(s1.concat(s2)).forEach((letter) => newArr.push(letter));

	return newArr.sort().join("");
}
