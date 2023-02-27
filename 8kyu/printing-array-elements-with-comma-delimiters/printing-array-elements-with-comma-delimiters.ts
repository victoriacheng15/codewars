export function printArray(array: any[]) {
	const arr: string[] = array.slice().map(String);
	return arr.join(",");
}
console.log(printArray([2, 4, 5, 2]));
