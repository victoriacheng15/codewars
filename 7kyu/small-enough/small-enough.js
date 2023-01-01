/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

/*
PREP:
- filter value out if it is under the limit
- check array length
- if 0, return true
- if not, return false
*/

function smallEnough(a, limit) {
	return a.filter((value) => value > limit).length === 0;
}
