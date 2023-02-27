export function squareSum(numbers: number[]): number {
	return numbers.reduce((sum, number) => sum + number ** 2, 0);
}
