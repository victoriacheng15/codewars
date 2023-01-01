/* 
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.
*/

/* 
PREP:
- input is obj
- check their langauge
- if all of them are the same, return true otherwsie false
- output should be boolean value
*/

function isSameLanguage(list) {
	return list.every(({ language }) => language === list[0].language);
}

const list1 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "JavaScript",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "JavaScript",
	},
	{
		firstName: "Hanna",
		lastName: "L.",
		country: "Hungary",
		continent: "Europe",
		age: 65,
		language: "JavaScript",
	},
];

console.log(isSameLanguage(list1));
