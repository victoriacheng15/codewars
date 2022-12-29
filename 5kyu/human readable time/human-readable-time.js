/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

/* 
PREP:
- get hours: 3600 => 60 min * 60 sec
- get minutes: find the reminder of seconds with 3600 seconds and then divde by 60 seconds
- get secs: find the reminder of seconds with 3600 seconds and then remidner again with 60 seconds
- if they are below 10, add 0 at the beginning
- if not below 10, return the hours/minutes/secs
*/

function humanReadable(seconds) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = Math.floor((seconds % 3600) % 60);

	const hDisplay = hours < 10 ? `0${hours}` : `${hours}`;
	const mDisplay = minutes < 10 ? `0${minutes}` : `${minutes}`;
	const sDisplay = secs < 10 ? `0${secs}` : `${secs}`;
	return `${hDisplay}:${mDisplay}:${sDisplay}`;
}
