export function rentalCarCost(d: number): number {
	const rate = d * 40;
	let total = 0;

	if (d > 6) {
		total = rate - 50;
	} else if (d > 2) {
		total = rate - 20;
	} else if (d < 3) {
		total = rate;
	}

	return total;
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(6));
console.log(rentalCarCost(9));
