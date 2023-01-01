/* 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

/* 
PREP：
- set counting to empty string
- if number is zero, return empty string
- loop through num
- adding num to "sheep..."
- return counting
*/

let countSheep = function (num) {
	let counting = "";
	for (let i = 0; i <= num; i += 1) {
		i === 0 ? "" : (counting += `${i} sheep...`);
	}
	return counting;
};
