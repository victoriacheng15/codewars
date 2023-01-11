export function descendingOrder(n: number): any {
	const res = [...`${n}`]
		.map(Number)
		.sort((a, b) => b - a)
		.join("");
    
	return Number(res);
}

const res = descendingOrder(1201); // 2110
console.log(res);
console.log(typeof res);
