export function findNeedle(haystack: unknown[]): string {
	let index = 0;

	for (const item of haystack) {
		if (item === "needle") {
			break;
		}
		index += 1;
	}

	return `found the needle at position ${index}`;
}
