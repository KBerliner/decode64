const fs = require("fs");

const decode_message = (filename) => {
	let decoded = [];

	const encoded = fs.readFileSync(filename, "utf8", (err, data) => {
		return err ? err : data;
	});

	encoded.split("\n").forEach((string) => {
		decoded.push(atob(string));
	});
	return decoded.join(" ").trim();
};

module.exports = { decode_message };
