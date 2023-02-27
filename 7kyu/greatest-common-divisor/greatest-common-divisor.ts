export function mygcd(x: number, y: number): number {
	return y === 0 ? x : mygcd(y, x % y);
}
