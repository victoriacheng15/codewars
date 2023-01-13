const fs = require("fs/promises");
const axios = require("axios")

const fetchUser = async () => {
	const url = "https://www.codewars.com/api/v1/users/victoriacheng15";
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const updateMarkdown = async () => {
	try {
		const user = await fetchUser();
		const lang = Object.entries(user.ranks.languages);
		const sortedByScores = lang.sort((a, b) => b[1].score - a[1].score);
		const displayTable = sortedByScores.map(([lang, {name, color, score}]) => {
			return `| ${lang} | ${name} | ${color} | ${score} |`;
		}).join('\n');

		console.log(displayTable);

		const markdown = `# Codewars

This is my collection of solutions repo for codewars

> Note: Strongly encouraged not to look at my solutions to kata until you have completed it yourselves or at least took the time to think about your own approaches!

## Profile

### Progress

Total Challenges Completed: ${user.codeChallenges.totalCompleted}

|  Language  | Rank  | Color  | Score |
| :--------: | :---: | :----: | :---: |
${displayTable}
		        `;

     await fs.writeFile('README.md', markdown);
	} catch (error) {
		console.log(error);
	}
};

updateMarkdown();
