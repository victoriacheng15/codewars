export function updateLight(current: string): string {
	const siginal: Record<string, string> = {
		green: "yellow",
		yellow: "red",
		red: "green",
	};
	return siginal[current];
}
