export function toAlternatingCase(s: string): string {
  return [...s].reduce((acc, char ) => {
    if(char === char.toUpperCase()) {
      acc += char.toLowerCase()
    } else {
      acc += char.toUpperCase()
    }
    return acc
  }, "")
}