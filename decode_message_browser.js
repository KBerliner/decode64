const fileInput = document.getElementById("fileInput");
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");

const decode_message = (encoded) => {
	let decoded = [];

	encoded.split("\n").forEach((string) => {
		decoded.push(atob(string));
	});
	return decoded.join(" ").trim();
};

fileInput.addEventListener("input", ({ target }) => {
	const file = target.files[0];
	if (file) {
		const reader = new FileReader();

		reader.readAsText(file);
		reader.onload = ({ target }) => {
			const contents = target.result;
			inputArea.innerHTML = contents;
			outputArea.innerHTML = decode_message(contents);
		};
	} else {
		console.log("oops");
	}
});
