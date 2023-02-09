export function well(x: string[]): string {
  const ideas = x.reduce((acc, curr) => {
    if (curr === "good") acc += 1;

    return acc;
  }, 0);

  if (ideas > 2) return "I smell a series!";
  if (ideas >= 1 && ideas <= 2) return "Publish!";
  return "Fail!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));
