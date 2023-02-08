export function points(games : string[]): number {
  const arr = games.map(game => game.split(":").map(Number));

  return arr.reduce((acc, [a, b]) => {
    if (a > b) acc += 3
    if (a === b) acc += 1

    return acc
  }, 0)
}