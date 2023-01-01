/* 
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/

/* 
PREP:
- set num = Number(n)
- 3 conditions to check
  - if n's type is boolean, number is not integear and number is less than 0
  - throw new TypeError
- use repeat() function to create a string with the povided length
  - use spread operator to convert it to array
- use map() to replace the string to v parameter
*/

function prefill(n, v) {
	const num = Number(n);
	const condition = typeof n === "boolean" || !Number.isInteger(num) || num < 0;
	if (condition) {
		throw new TypeError(`${n} is invalid`);
	}
	return [..."0".repeat(num)].map(() => v);
}
