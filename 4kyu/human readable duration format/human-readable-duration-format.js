/* 
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

/* 
PREP:
- get times for years, days, hours, minutes, secs
- set up arrays for durations and units
- use map() to check 
  - if time is above 1, return the unit with s at the end
  - if time is equal to 1, return the unit
- filter out any undefined
- check timeFormat length
- if longer than 1, use pop() to get the last element
  - join them together with , and then "and" with the last element
- if not, return the timeFormat[0]
*/

function formatDuration(seconds) {
	if (seconds === 0) return "now";
	// get times
	const years = Math.floor(seconds / 3600 / 24 / 365);
	const days = Math.floor((seconds / 3600 / 24) % 365);
	const hours = Math.floor((seconds / 3600) % 24);
	const minutes = Math.floor((seconds / 60) % 60);
	const secs = seconds % 60;
	// set up arrays
	const durations = [years, days, hours, minutes, secs];
	const units = ["year", "day", "hour", "minute", "second"];

	const timeFormat = durations
		.map((time, index) => {
			if (time > 1) return `${time} ${units[index]}s`;
			if (time === 1) return `${time} ${units[index]}`;
		})
		.filter(Boolean);

	if (timeFormat.length > 1) {
		const last = timeFormat.pop();
		return `${timeFormat.join(", ")} and ${last}`;
	}
	return timeFormat[0];
}
