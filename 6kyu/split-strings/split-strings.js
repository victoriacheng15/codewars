/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

/* 
PREP:
- check str length, if odd, add '_' at the end
- if length is 0, return empty array
- use dot from regex (the dot means it will match any characters
*/

function solution(str) {
	const result = str.length % 2 ? str.concat("_") : str;
	return str.length === 0 ? [] : result.match(/../g);
}
