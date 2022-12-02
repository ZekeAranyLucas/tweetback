let data = {
	username: "ZekeAranyLucas", // No leading @ here
	homeLabel: "Introspective Developer",
	homeUrl: "https://blog.introspectivedeveloper.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;