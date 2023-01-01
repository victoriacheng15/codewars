/* 
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

/* 
or do the count and then return count
let count = 0
if (condition === 1) {
      count += 1
    }
*/

function pairs(ar) {
	const array = [];
	for (let i = 0; i < ar.length; i += 2) {
		const condition = Math.abs(ar[i] - ar[i + 1]);
		if (condition === 1) {
			array.push([ar[i], ar[i + 1]]);
		}
	}
	return array.length;
}
