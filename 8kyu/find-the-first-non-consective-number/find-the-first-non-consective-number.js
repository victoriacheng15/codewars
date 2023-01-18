/* 
PREP:
- use find() function
- compare num with index + arr[0] (since we dont know if it is 1 larger and it could 2 or 3 larger than prev num, so use arr[0] to check)
*/

function firstNonConsecutive(arr) {
	const result = arr.find((num, index) => num !== index + arr[0]);
	return Number.isInteger(result) ? result : null;
}
