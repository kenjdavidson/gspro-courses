module.exports = function () {
	return {
		api_key: process.env.API_KEY || "development",
	};
};