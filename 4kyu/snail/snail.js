/* 
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

example:
1, 2, 3
4, 5, 6
7, 8, 9

...array.shift()
finalArr = [1, 2, 3]

4, 5, 6
7, 8, 9
array.map((row) => finalArr.push(row.pop()));
finalArr = [1, 2, 3, 6, 9]

4, 5  ==> 7, 8 =============> 8, 7
7, 8  ==> 4, 5 =============> 5, 4
array.reverse().map((row) => row.reverse());

...arr.shift()
finalArr = [1, 2, 3, 6, 9, 8, 7]

5, 4
array.map((row) => finalArr.push(row.pop()));
finalArr = [1, 2, 3, 6, 9, 8, 7, 4]

5
array.reverse().map((row) => row.reverse());

...array.shift()
finalArr = [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

const snail = function (array) {
	const finalArr = [];
	while (array.length) {
		finalArr.push(...array.shift());
		array.map((row) => finalArr.push(row.pop()));
		array.reverse().map((row) => row.reverse());
	}
	return finalArr;
};
