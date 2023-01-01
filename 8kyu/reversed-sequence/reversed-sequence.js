/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

/* 
PREP:
- use Array(n + 1) to fill the length
- use keys() to fill the property name, in this case, they are index value
- use slice() to get rid the first index value
- reverse the array

note:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

const reverseSeq = (n) => {
	const array = [...Array(n + 1).keys()].slice(1);
	return array.reverse();
};
