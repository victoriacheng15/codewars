/* 
PREP:
- flower1 is odd and flower2 is even, true
- flower1 is even and flower2 is odd, true
- everything else is false

note: 

shortest way 
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/

function lovefunc(flower1, flower2) {
	if (flower1 % 2 !== 0 && flower2 % 2 === 0) return true;
	if (flower1 % 2 === 0 && flower2 % 2 !== 0) return true;
	return false;
}
