/* 
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

/* 
PREP:
- set up roman object
- use Object.keys() to make roman iterable array in the order
- set empty str
- use for...of loop to get the property value (1, 4, 5, 9 etc)
- use Math.floor(number / roman[i]) to find out how many 
- minus number from the reminder (leftover number)
- until number reach zero
- use repeat() to get x amonut from the reminder

note:
use console.log(number, reminder, roman[i], i.repeat(reminder));
to see how it works

example:
solutuion(1)
number = 1, roman[i] = 1
reminder = 1 / 1 = '1'
number = 1 - 1 * 1 = 0
i.repeat(reminder) => I for 1

solution(2)
number = 2, roman[i] = 1
reminder = 2 / 1 = '2'
number = 2 - 2 * 1 = 0
i.repeat(reminder) => I for 2

solution(21)
number = 21, roman[i] = 10, 1
reminder = 21 / 10 = 2.1 => '2', 1 / 1 = '1'
number = 21 - 2 * 10 = 1, 1 - 1 * 1 = 0
i.repeat(reminder) => XX for 2, I for 1
*/

function solution(number) {
	const roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	let str = "";
	for (let i of Object.keys(roman)) {
		let reminder = Math.floor(number / roman[i]);
		number -= reminder * roman[i];
		str += i.repeat(reminder);
	}
	return str;
}
