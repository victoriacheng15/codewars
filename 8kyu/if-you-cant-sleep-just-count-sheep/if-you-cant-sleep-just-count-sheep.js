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
