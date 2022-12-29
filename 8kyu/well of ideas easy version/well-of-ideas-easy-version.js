/* 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

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
