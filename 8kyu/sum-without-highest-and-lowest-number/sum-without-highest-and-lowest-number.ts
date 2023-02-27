export function sumArray(array: number[] | null): number {
	if (!array || array.length < 2) return 0;

	const min = Math.min(...array);
	const max = Math.max(...array);

	return array.reduce((a, b) => a + b, 0) - min - max;
}

console.log(sumArray([4, 0, -2, -4, 6])); // 2
