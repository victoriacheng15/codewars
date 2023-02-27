export function squareOrSquareRoot(array: number[]): number[] {
	function isInteger(num: number) {
		return Number.isInteger(Math.sqrt(num));
	}

	return array.map((num) => (isInteger(num) ? Math.sqrt(num) : num * num));
}
