/* 
PREP:
- loop through array to find 'good'
- get true values
- if length is more than 2
  - 'I smell a series!'
- if length is between 1 and 2
  - 'Publish!'
- if nothing
  - 'Fail!'
*/

function well(x) {
	const { length } = x.map((elem) => elem === "good").filter(Boolean);
	if (length > 2) return "I smell a series!";
	if (length >= 1 && length <= 2) return "Publish!";
	return "Fail!";
}
