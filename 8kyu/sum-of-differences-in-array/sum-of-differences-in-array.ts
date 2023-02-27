export function sumOfDifferences(arr: number[]): number {
	return arr
		.sort((a, b) => b - a)
		.reduce((acc, num, index) => {
			const next = arr[index + 1];
			const diff = num - next;
			if (!isNaN(diff)) acc += diff;

			return acc;
		}, 0);
}
