const fs = require('fs/promises');

const fetchUser = async () => {
  const url = 'https://www.codewars.com/api/v1/users/victoriacheng15';
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateMarkdown = async () => {
  try {
    const user = await fetchUser();
    console.log(user);
    console.log(user.ranks.languages);
    const markdown = `# Codewars

This is a repo that contains all my solutions

> Note: please try to complete problems yourselves before look up solutions!

## Details

Total Challenges Completed: ${user.codeChallenges.totalCompleted}

Languages:

${Object.keys(user.ranks.languages)
  .map((lang) => `- ${lang}`)
  .join('\n')}
        `;

    await fs.writeFile('README.md', markdown);
  } catch (error) {
    console.log(error);
  }
};

updateMarkdown();
