/* 
Write the function totalTime(), which accepts an array. The array contains an arbitrary number of strings, where each string represents a duration in time (hours, minutes, seconds). The function should add all the durations and return the total time, as a string, on the following format: "(num) days, (num) hours, (num) minutes, (num) seconds"

Restrictions
Your function should only return days, hours, minutes and seconds if they are > 0
If the sum of all the values in the array are zero, your function should return "0" (a string)
The string values in the array will never represent negative numbers. I.e. the sum of all the values in the array will never be less than 0.
The array will always contain at least one string. There is no need to check for empty arrays.
You can assume that all strings in the array follow the following pattern: "hh:mm:ss", where h - hours; m - minutes; s - seconds
Note that hours and minutes are optional, so a more precise (but harder to read) specification is: [[hh:]mm:]ss
If a duration is less than 10 it will always be preceeded by a zero. I.e. expect to always get this format: ["01:01:01"]. You will never get this format: ["1:1:1"]
Remember that each value in the string returned by your function should be followed by a comma (unless it is the last value).
Wrong: "1 day 3 hours 5 minutes"
Correct: "1 day, 3 hours, 5 minutes"
Example 1
If hours and/or minutes are 0 they should be excluded from the answer.

totalTime(['60']); // --> "1 minute"
Note that the above answer is "1 minute" and not "1 minute 0 seconds"

Example 2
The unit name should be pluralized by adding an "s" if its value is more than 1.

totalTime(['25:01:01']); // --> "1 day, 1 hour, 1 minute, 1 second"
totalTime(['50:02:02']); // --> "2 days, 2 hours, 2 minutes, 2 seconds"
Note that "1 second" does not end with an "s", while "2 seconds" does. Same goes for days, hours and minutes.

Some final examples:
totalTime(['01:20','03:10']);    // --> '4 minutes, 30 seconds'
totalTime(['00:50','00:30']);    // --> '1 minute, 20 seconds'
totalTime(['01:20:00','40:00']); // --> '2 hours'
totalTime(['12:00:00','10:00:00','02:00:00']); // --> '1 day'
totalTime(['24:00:00','24:00:00','07']); // --> '2 days, 7 seconds'
*/

/* 
input array of strings
- iterable through to remove ':'
- conver to number
- add them up
- check if the number is more than 1
  - if more than 1, return hours
  - if not, no s at the end
output strings in x hour(s), x minute(s), x second(s)
*/

// function reverse(time) {
//   return `${String(time).split('').reverse().join('')}`;
// }

// function totalTime(arr) {
//   let [day, hour, minute, second] = [0, 0, 0, 0];
//   const getTotalTime = arr
//     .map((item) => +item.split(':').join(''))
//     .reduce((acc, value) => acc + value, 0);
//   const timeString =
//     `${getTotalTime}`.length % 2 ? `0${getTotalTime}` : `${getTotalTime}`;
//   const { length } = timeString;
//   for (let i = length; i > 0; i -= 2) {
//     const getTime = timeString.slice(i - 2, i);
//     if (i === length) second += +getTime;
//     if (i === length - 2) second += +getTime * 60;
//     if (i === length - 4) second += +getTime * 3600;
//     if (i === length - 6) second += +getTime * 86400;
//   }

//   day = Math.floor(second / 86400);
//   hour = Math.floor((second % 86400) / 3600);
//   minute = Math.floor((second % 3600) / 60);
//   second = Math.floor((second % 3600) % 60);

//   const duration = [day, hour, minute, second];
//   const units = ['day', 'hour', 'minute', 'second'];

//   const timeFormat = duration
//     .map((time, index) => {
//       if (time > 1) return `${time} ${units[index]}s`;
//       if (time === 1) return `${time} ${units[index]}`;
//     })
//     .filter(Boolean)
//     .join(', ');

//   return timeFormat || '0';
// }

function totalTime(arr) {
	const totalSecs = arr.reduce(
		(acc, strTime) =>
			acc + strTime.split(":").reduce((total, time) => +time + total * 60, 0),
		0,
	);

	if (!totalSecs) return "0";

	const times = [
		Math.floor(totalSecs / 86400),
		Math.floor((totalSecs % 86400) / 3600),
		Math.floor((totalSecs % 3600) / 60),
		Math.floor((totalSecs % 3600) % 60),
	];

	const units = ["day", "hour", "minute", "second"];
	const timeFormat = times
		.map((time, index) => {
			if (time > 1) return `${time} ${units[index]}s`;
			if (time === 1) return `${time} ${units[index]}`;
		})
		.filter(Boolean)
		.join(", ");

	return timeFormat;
}

describe("total time", () => {
	const cases = [
		[["60"], "1 minute"],
		[["25:01:01"], "1 day, 1 hour, 1 minute, 1 second"],
		[["50:02:02"], "2 days, 2 hours, 2 minutes, 2 seconds"],
		[["01:20", "03:10"], "4 minutes, 30 seconds"],
		[["00:50", "00:30"], "1 minute, 20 seconds"],
		[["01:20:00", "40:00"], "2 hours"],
		[["12:00:00", "10:00:00", "02:00:00"], "1 day"],
		[["24:00:00", "24:00:00", "07"], "2 days, 7 seconds"],
	];

	for (const [arr, output] of cases) {
		it(`should return ${output} when arr = [${arr}]`, () => {
			const input = totalTime(arr);
			expect(input).toBe(output);
		});
	}
});
