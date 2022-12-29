/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/

/* 
PREP:
- set counter with object literal {}
- map through array and count
- 'counter[char] = counter[char] + 1' => set the counter equal to the character = count
*/

function count(string) {
	let counter = {};
	[...string].map((char) => (counter[char] = counter[char] + 1 || 1));
	return counter;
}
