/* 
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

/* 
PREPS:
- check prev and next string length
- use sort()

note: 
if only use sort() without any callback, it will only sort based on the first letter
*/

function sortByLength(array) {
	return array.sort((prev, next) => (prev.length > next.length ? 1 : -1));
}
