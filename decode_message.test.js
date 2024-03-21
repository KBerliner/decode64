const fs = require("fs");
const { decode_message } = require("./decode_message");

// Test cases for normal functionality
describe("Normal functionality tests", () => {
	const testCases = [
		{
			filename: "test1.txt",
			expected: "I'm ready to code",
		},
		{
			filename: "test2.txt",
			expected:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida. Morbi enim nunc faucibus a pellentesque. Eget nulla facilisi etiam dignissim diam. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Scelerisque fermentum dui faucibus in ornare quam. Amet dictum sit amet justo donec enim diam. Volutpat est velit egestas dui. Odio facilisis mauris sit amet massa vitae tortor. Curabitur vitae nunc sed velit dignissim. Purus viverra accumsan in nisl. Volutpat blandit aliquam etiam erat velit scelerisque. Vitae suscipit tellus mauris a diam maecenas sed.",
		},
		{
			filename: "test3.txt",
			expected: "OpenAI is awesome!",
		},
		{
			filename: "test4.txt",
			expected: "This is a test message.",
		},
	];

	testCases.forEach((testCase, index) => {
		test(`Test Case ${index + 1}`, () => {
			const result = decode_message(testCase.filename);
			expect(result).toEqual(testCase.expected);
		});
	});
});

// Edge case tests
describe("Edge case tests", () => {
	const edgeCases = [
		{
			filename: "empty.txt",
			expected: "",
		},
		{
			filename: "single_line.txt",
			expected: "Lorem ipsum dolor sit amet",
		},
		{
			filename: "no_newline.txt",
			expected: "No newline",
		},
	];

	edgeCases.forEach((edgeCase, index) => {
		test(`Edge Case ${index + 1}`, () => {
			const result = decode_message(edgeCase.filename);
			expect(result).toEqual(edgeCase.expected);
		});
	});
});
