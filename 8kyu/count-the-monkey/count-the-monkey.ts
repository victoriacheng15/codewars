export function monkeyCount(n: number) {
	const res: number[] = [];
	let count = 1;
	while (count <= n) {
		res.push(count);
		count++;
	}

	return res;
}

console.log(monkeyCount(5));
