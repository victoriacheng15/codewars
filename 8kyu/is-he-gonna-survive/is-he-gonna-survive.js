/* 
PREP:
- each dragon takes 2 bullets to kill
  - bullets need = dragno * 2
- if bullts is larger than or equal to bullets need
- return true or false
*/

function hero(bullets, dragons) {
	return bullets >= dragons * 2;
}
