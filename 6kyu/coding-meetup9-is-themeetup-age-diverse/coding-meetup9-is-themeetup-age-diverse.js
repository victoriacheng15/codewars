/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.
*/

/* 
PREP:
- input is obj
- set up age map
- get age and then get age's whole number
- set up count to keep tracking how many is each
- check lenght on age map and count 
- check if every value in count are above 1 or not
- retur true when ageMap and count have the same length and counts are above 1
*/

function isAgeDiverse(list) {
	const ageMap = {
		10: "teens",
		20: "twenties",
		30: "thirties",
		40: "forties",
		50: "fifties",
		60: "sixties",
		70: "seventies",
		80: "eighties",
		90: "nineties",
		100: "centenarian",
	};
	const ageArr = list
		.map(({ age }) => age)
		.map((age) => ageMap[age - (age % 10)] || "centenarian");
	const count = {};
	ageArr.forEach((age) => (count[age] = count[age] || 0 + 1));
	const checkLength =
		Object.keys(ageMap).length === Object.values(count).length;
	return Object.values(count).every((counter) => counter > 0) && checkLength;
}
