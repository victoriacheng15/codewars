/* 
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

/* 
PREPS:
- set regex for capital letters
- indexOf to return the capital's index
*/

const capitals = (word) => {
	const regex = /[A-Z]/g;
	const capIndex = (char) => word.indexOf(char);
	return word.match(regex).map(capIndex);
};
