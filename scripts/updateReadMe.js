const fs = require("fs/promises");
const axios = require("axios");

const BASE_URL = "https://www.codewars.com/api/v1/users";
const USER = "victoriacheng15";
const CODE_CHALLENGE = "code-challenges/completed"

const fetchUserInfo = async () => {
	const url = `${BASE_URL}/${USER}`;

	try {
		const res = await axios.get(url);
		const { ranks, codeChallenges } = res.data;

		const languages = ranks.languages;
		const langs = Object.entries(languages);
		const sortedByScores = langs.sort((a, b) => b[1].score - a[1].score);
		const totalCompleted = codeChallenges.totalCompleted;

		return { sortedByScores, totalCompleted };
	} catch (error) {
		console.log(error);
	}
};

fetchUserInfo();

const fetchCompletedChallenges = async () => {
	const url = `${BASE_URL}/${USER}/${CODE_CHALLENGE}`;

	try {
		const res = await axios.get(url);
		const totalPages = res.data.totalPages;

		const promises = [];
		let page = 0;
		while (page < totalPages) {
			const challenges = await axios.get(`${url}?page=${page}`);
			promises.push(challenges.data.data);
			page++;
		}

		const challengesArray = promises.flat();

		return { challengesArray };
	} catch (error) {
		console.log(error);
	}
};

const getCompletedNum = async () => {
	try {
		const { challengesArray } = await fetchCompletedChallenges();

		function filteredByLang(lang) {
			return challengesArray.filter(({ completedLanguages }) =>
				completedLanguages.includes(lang),
			).length;
		}

		return { filteredByLang };
	} catch (error) {
		console.log(error);
	}
};

const updateReadMe = async () => {
	try {
		const { sortedByScores, totalCompleted } = await fetchUserInfo();
		const { filteredByLang } = await getCompletedNum();

		const displayProgressTable = sortedByScores
			.map(([lang, { name, color, score }]) => {
				return `| ${lang} | ${name} | ${color} | ${score} | ${filteredByLang(lang)} |`;
			})
			.join("\n");

		console.log(displayProgressTable);

		const content = `# Codewars

This is my collection of solutions for codewars

> Note: Strongly encouraged not to look at my solutions until you have completed it yourselves or at least took the time to think about your own approaches!

## Profile

![codewars profile](https://www.codewars.com/users/victoriacheng15/badges/small)

### Progress

I have completed ${totalCompleted} challenges so far!

|  Language  | Rank  | Color  | Score | Total Completed |
| :--------: | :---: | :----: | :---: | :-------------: |
${displayProgressTable}
		        `;

		await fs.writeFile("README.md", content);
	} catch (error) {
		console.log(error);
	}
};

updateReadMe();
