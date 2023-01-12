export function DNAtoRNA(dna: string): string {
	const swap: Record<string, string> = {
		T: "U",
		U: "T",
	};

  return [...dna].map(char => swap[char] ? swap[char] : char).join('')
}


console.log(DNAtoRNA("GCAT"))