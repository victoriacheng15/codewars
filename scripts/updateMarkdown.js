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
		const sorted = lang.sort((a, b) => b[1].score - a[1].score);
		const res = sorted.map(([lang, {name, color, score}]) => {
			return `| ${lang} | ${name} | ${color} | ${score} |`;
		}).join('\n');

		console.log(res);
		    const markdown = `# Codewars

This is a repo that contains all my solutions

> Note: please try to complete problems yourselves before look up solutions!

## Details

Total Challenges Completed: ${user.codeChallenges.totalCompleted}

|  Language  | Rank  | Color  | Score |
| :--------: | :---: | :----: | :---: |
${res}
		        `;

     await fs.writeFile('README.md', markdown);
	} catch (error) {
		console.log(error);
	}
};

updateMarkdown();
