/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

/*
PREP:
- must use filter
- set codnition: num % 2 === 0
- if the num is equal to 0, keep
- if not, fitler out
*/

function getEvenNumbers(numbersArray) {
	// filter out the odd numbers
	return numbersArray.filter((num) => num % 2 === 0);
}
