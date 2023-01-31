/* 
PREP:
- if emptys string, string length is less than 3, return null
- string length is more than 3,
- remove first item
- remove last item
- return string value
*/

function array(arr) {
	return arr.split(",").slice(1, -1).join(" ") || null;
}
