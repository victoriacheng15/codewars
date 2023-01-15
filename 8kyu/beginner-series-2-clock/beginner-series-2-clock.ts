export function past(h: number, m: number, s: number): number {
	const times = [h, m, s];
	const total = times.reduce((acc, time) => (acc = 60 * acc + time), 0);
	return total * 1000;
}
