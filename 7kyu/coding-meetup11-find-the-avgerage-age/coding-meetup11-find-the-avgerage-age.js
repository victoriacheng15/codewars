/* 
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
*/

/* 
PREP:
- get age
- add ages and then divide by the array length
- round average age
- output is number (age)
*/

function getAverageAge(list) {
	const getAge = list.map(({ age }) => age);
	const { length } = getAge;
	const avgAge = getAge.reduce((acc, cur) => acc + cur, 0) / length;
	return Math.round(avgAge);
}

const list1 = [
	{
		firstName: "Maria",
		lastName: "Y.",
		country: "Cyprus",
		continent: "Europe",
		age: 30,
		language: "Java",
	},
	{
		firstName: "Victoria",
		lastName: "T.",
		country: "Puerto Rico",
		continent: "Americas",
		age: 70,
		language: "Python",
	},
];
console.log(getAverageAge(list1));
