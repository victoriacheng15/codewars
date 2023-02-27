export function findMultiples(integer: number, limit: number): number[] {
	const result: number[] = [];
	for (let i = 1; i <= limit; i++) {
		if (i % integer === 0) {
			result.push(i);
		}
	}

	return result;
}

console.log(findMultiples(5, 25));
