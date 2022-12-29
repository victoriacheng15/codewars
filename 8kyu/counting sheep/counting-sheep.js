/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

// todo
// set up empty array to store true
// check to see which one is true with filter
// push to sorted array

function countSheeps(arrayOfSheep) {
	let sorted = [];
	arrayOfSheep.filter((check) => {
		if (check === true) {
			sorted.push(check);
		}
	});
	return sorted.length;
}

// updated solution
// use filter() method
function countSheeps(arrayOfSheep) {
	return arrayOfSheep.filter((item) => item === true).length;
}
