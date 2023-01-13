export function doubleChar(str: string): string {
	return [...str].map((char) => char.repeat(2)).join("");
}

console.log(doubleChar("abcd"));
