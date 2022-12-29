/* 
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

/* 
PREP
p - array 
r - the missing number
e - [0, 1, 3] => return 2
p
- sort the array
- loop through the array
- check if arr[0] equals to arr[1] - 1
- if true, keep going
- if false, return arr[0] + 1 (the missing elem)
*/

function getMissingElement(superImportantArray) {
	const sorted = superImportantArray.sort();
	for (let i = 0; i < sorted.length; i += 1) {
		if (sorted[i] !== sorted[i + 1] - 1) {
			return sorted[i] + 1;
		}
	}
}
