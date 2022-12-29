/* 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
*/

/* 
n = number of checkout tills
indexOf - return first index of the input
example:
customer = [1, 2, 3, 4, 5]
n = 100
arr = [0, 0, 0, 0, 0, 0, 0,......] (arr length is based on n)
idx 0 [1, 0, 0, 0, 0, 0, 0,......] 
idx 1 [1, 2, 0, 0, 0, 0, 0,......] 
idx 2 [1, 2, 3, 0, 0, 0, 0,......] 
idx 3 [1, 2, 3, 4, 0, 0, 0,......] 
idx 4 [1, 2, 3, 4, 5, 0, 0,......] 

At each time, 
- it looks for first lowest number from the array
- then arr[0] + 1
- at 2nd loop, the array is [1, 0, 0, 0, 0, 0, 0,......] 
  - so the first lowest number is arr[1] + 2 (time)
- 3rd loop, arr[2] + 3
- so on
*/

function queueTime(customers, n) {
	const arr = new Array(n).fill(0);
	for (const time of customers) {
		const idx = arr.indexOf(Math.min(...arr));
		arr[idx] += time;
	}
	return Math.max(...arr);
}

describe("supermarket queue", () => {
	const cases = [
		[[], 1, 0],
		[[1, 2, 3, 4], 1, 10],
		[[2, 2, 3, 3, 4, 4], 2, 9],
		[[1, 2, 3, 4, 5], 100, 5],
	];

	for (const [customers, n, output] of cases) {
		it(`should return ${output} when customers = [${customers}] and n (checkout till) = ${n}`, () => {
			const input = queueTime(customers, n);
			expect(input).toBe(output);
		});
	}
});
