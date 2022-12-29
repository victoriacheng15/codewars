/* 
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
*/

/* 
PREP:
- take array in
- return total sum
- minSum({5,4,2,3}) ==> return (22) 
p
- sort the array in the order
- loop through half of the array
- first item * last item of the array
- add to sum
*/

function minSum(arr) {
	const sorted = arr.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < sorted.length / 2; i += 1) {
		sum += sorted[i] * sorted[sorted.length - 1 - i];
	}
	return sum;
}
