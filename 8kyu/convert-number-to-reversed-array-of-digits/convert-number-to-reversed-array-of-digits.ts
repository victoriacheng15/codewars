export const digitize = (n: number): number[] => {
	return [...`${n}`].reverse().map(Number);
};
