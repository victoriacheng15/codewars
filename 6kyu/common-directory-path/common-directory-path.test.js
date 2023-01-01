/* 
Returns the commom directory path for specified array of full filenames.

 @param {array} pathes
 @return {string}
Examples:

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/

/* 
input array
- set up empty array
- get the min length
- iterate through words
- check individual word in each path with the first path of invidual word
- if same, push to arr
- join them together
- replace any word after '/' at the end
output string
*/

function getCommonDirectoryPath(pathes) {
	const arr = [];
	const length = Math.min(...pathes.map((string) => string.length));
	for (let i = 0; i < length; i += 1) {
		if (pathes.every((path) => path[i] === pathes[0][i])) {
			arr.push(pathes[0][i]);
		} else {
			break;
		}
	}
	return arr.join("").replace(/\w+$/g, "");
}

// .map((subarr, index) => {
//   const filtered = subarr.filter((element) => element === first[index]);
//   return filtered;
// })

describe("get comm directory path", () => {
	it("should return common path", () => {
		const path = ["/web/images/image1.png", "/web/images/image2.png"];
		expect(getCommonDirectoryPath(path)).toBe("/web/images/");
	});

	it("should return common path", () => {
		const path = [
			"/web/assets/style.css",
			"/web/scripts/app.js",
			"home/setting.conf",
		];
		expect(getCommonDirectoryPath(path)).toBe("");
	});

	it("should return common path", () => {
		const path = ["/web/assets/style.css", "/.bin/mocha", "/read.me"];
		expect(getCommonDirectoryPath(path)).toBe("/");
	});
});
