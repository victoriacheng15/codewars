/* 
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
*/

/* 
PREP:
- input is obj
- lower case for first name and last name
- number is from 2020 - their ages
- output is the same but add username
*/

function addUsername(list) {
	const lowerCase = (word) => word.toLowerCase();
	const calcNum = (age) => new Date().getFullYear() - age;
	function formatUserName(person) {
		const first = lowerCase(person.firstName);
		const last = lowerCase(person.lastName[0]);
		return `${first}${last}${calcNum(person.age)}`;
	}

	list.forEach((person) => (person.username = formatUserName(person)));
	return list;
}
