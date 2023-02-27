export function nearestSq(n: number): number {
	return Math.round(Math.sqrt(n)) ** 2;
}

console.log(nearestSq(10));
console.log(nearestSq(111));
console.log(nearestSq(9999));
