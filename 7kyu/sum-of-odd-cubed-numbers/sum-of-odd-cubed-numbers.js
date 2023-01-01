/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
	const getNumbers = arr.map(Number).filter((num) => num % 2 !== 0);
	const getSum = getNumbers.reduce((acc, curr) => acc + curr ** 3, 0);
	return getNumbers.includes(NaN) ? undefined : getSum;
}
