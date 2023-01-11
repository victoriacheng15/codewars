export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
	return arrayOfSheep.filter(Boolean).length;
}

const arr = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

console.log(countSheeps(arr));
