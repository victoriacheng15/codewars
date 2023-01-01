/* 
You are sending out a marketing campaign for your company, Code-o-matic. But you want to personalise the emails so that the people don't think they are being spammed!

You will be given a string of marketing text called campaign and a hash person.

In the string campaign, there will be three personalisable elements

<NAME>
<CITY>
<FAVOURITE PRODUCTS>.
You need to replace these elements with the personal details of the person to whom you are sending the email which are in the hash person (which may contain other information from the database, which you don't need).

Examples:

You will be given this string called campaign:

"Hello , how is the weather in today? We wanted to let you know that are on sale today only!"

You will be given this hash:

person = { name : "Sally", city : "Glasgow", favourite_products : "toasters"}.
You should return this string:

"Hello Sally, how is the weather in Glasgow today? We wanted to let you know that toasters are on sale today only!"

Note that the hash keys do not exactly match the tags, but there is a one to one mapping between them.

~~~ if:javascript

| Tag | Key|
|----------|
| `<NAME>` | `name`|
| `<CITY>` | `city`|
| `<FAVOURITE PRODUCTS>` | `favourite_products`|
~~~
*/

function personalise(campaign, person) {
	const { name, city, favourite_products } = person;
	return campaign
		.replace(/<NAME>/g, name)
		.replace(/<CITY>/g, city)
		.replace(/<FAVOURITE PRODUCTS>/g, favourite_products);
}

describe("personalise", () => {
	it("should return a personalised email", () => {
		const person = {
			name: "Sally",
			city: "Glasgow",
			favourite_products: "toasters",
		};
		const campaign =
			"Hello <NAME>, how is the weather in <CITY> today? We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!";
		expect(personalise(campaign, person)).toBe(
			"Hello Sally, how is the weather in Glasgow today? We wanted to let you know that toasters are on sale today only!",
		);
	});
});
