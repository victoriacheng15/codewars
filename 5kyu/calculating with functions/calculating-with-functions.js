/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
oranges: integer array, distances at which each orange falls from the tree.
*/

/* 
PREP:
- set up expression fnuction 
  - if no operation, return number othersiwe, return operation(num)
*/

function expression(num, operation) {
	return operation ? operation(num) : num;
}

function zero(operation) {
	return expression(0, operation);
}
function one(operation) {
	return expression(1, operation);
}
function two(operation) {
	return expression(2, operation);
}
function three(operation) {
	return expression(3, operation);
}
function four(operation) {
	return expression(4, operation);
}
function five(operation) {
	return expression(5, operation);
}
function six(operation) {
	return expression(6, operation);
}
function seven(operation) {
	return expression(7, operation);
}
function eight(operation) {
	return expression(8, operation);
}
function nine(operation) {
	return expression(9, operation);
}

function plus(x) {
	return (y) => y + x;
}
function minus(x) {
	return (y) => y - x;
}
function times(x) {
	return (y) => y * x;
}
function dividedBy(x) {
	return (y) => Math.floor(y / x);
}
