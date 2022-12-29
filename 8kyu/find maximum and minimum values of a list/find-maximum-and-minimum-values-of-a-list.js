/* 
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

/* 
PREP:
- use Math.min and Math.max to find values
- be sure use spread operator as the function only takes single value

note:
if not use spread operator, can use apply()
e.g. Math.min.apply(list)
*/

let min = function (list) {
	return Math.min(...list);
};

let max = function (list) {
	return Math.max(...list);
};
