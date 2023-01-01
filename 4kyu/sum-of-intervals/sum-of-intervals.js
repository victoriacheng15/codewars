/* 
sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]
*/

/* 
cant pass large random test

https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
*/

const sum = (x, y) => x + y;

function sumIntervals(intervals) {
	const list = [];
	intervals.forEach(([a, b]) => {
		list.length = Math.max(list.length, b);
		for (let i = a; i < b; i += 1) {
			list[i] = 1;
		}
	});
	return list.reduce(sum, 0);
}

// or

function sumIntervals(intervals) {
	const numbers = {};
	intervals.forEach((num) => {
		for (let i = num[0]; i < num[1]; i += 1) {
			numbers[i] = i;
		}
	});
	// return numbers;
	return Object.keys(numbers).length;
}
