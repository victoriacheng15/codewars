/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
*/

/*
PREP:
- set up arary to take all parameters
- set a multiplySelf for age * age
- set a function to add all age for reduce()
- get total from map multiplySelf and reduce
- square root the total and then divide by 2
- round down to the nearest integer
*/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	const array = [age1, age2, age3, age4, age5, age6, age7, age8];
	const multiplySelf = (age) => age * age;
	const addAll = (a, b) => a + b;
	const total = array.map(multiplySelf).reduce(addAll, 0);
	return Math.floor(Math.sqrt(total) / 2);
}
