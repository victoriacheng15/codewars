export function abbrevName(name: string): string {
	const nameArr = name.toUpperCase().split(" ");
	return `${nameArr[0][0]}.${nameArr[1][0]}`;
}
