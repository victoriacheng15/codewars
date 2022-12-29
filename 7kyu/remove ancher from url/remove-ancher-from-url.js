/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" 
*/

/* 
steps:
- find the ancher #
- remove all letters after #
*/

function removeUrlAnchor(url) {
	const regex = /#.*/i;
	return url.replace(regex, "");
}
