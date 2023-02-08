/* 
PREP:
- if less than 3 days, no discount
- if more than 2 days, $20 disconut
- if more than 6 days, $50 discount
*/

function rentalCarCost(d) {
	const rate = 40;
	let total = 0;
	if (d > 6) {
		total = d * rate - 50;
	} else if (d > 2) {
		total = d * rate - 20;
	} else if (d < 3) {
		total = d * rate;
	}
	return total;
}
