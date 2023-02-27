// function findMultiples(integer, limit) {
//   const result = []
//   for (let i = 1; i <= limit; i++) {
//     if (i % integer === 0) {
//       result.push(i)
//     }
//   }
//   return result
// }

function findMultiples(integer, limit) {
	return [...Array(limit + 1).keys()].slice(1).filter((i) => i % integer === 0);
}

console.log(findMultiples(5, 25));
