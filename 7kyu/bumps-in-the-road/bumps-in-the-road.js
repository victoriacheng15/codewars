/* 
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

/* 
PREP:
- convert parameter to array with spread operator
- filter out value that is equal to n
- get filtered length
- if above 15, car dead
- if not, car alive
*/

function bump(x) {
	const nLength = [...x].filter((value) => value === "n").length;
	return nLength > 15 ? "Car Dead" : "Woohoo!";
}
