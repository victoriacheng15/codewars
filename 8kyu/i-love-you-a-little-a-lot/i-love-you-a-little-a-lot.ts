export function howMuchILoveYou(petals: number): string{
  const phrase: Record<number, string> = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    0: "not at all",
  };

  return phrase[petals % 6];
}