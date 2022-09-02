const types = [
	{
		value: "email",
		name: "✉️  email:\t A new email production",
	},
	{
		value: "feat",
		name: "✨ feat:\t A new feature",
	},
	{
		value: "fix",
		name: "🐞 fix:\t A bug fix",
	},
	{
		value: "chore",
		name: "🔩 chore:\t Doesn't modify src files",
	},
	{
		value: "docs",
		name: "📚 docs:\t Update to the documentation",
	},
	{
		value: "refactor",
		name: "♻ refactor:\t Neither fixes nor adds a feature",
	},
	{
		value: "revert",
		name: "⏪ revert:\t Reverts a previous commit",
	},
];

const scopes = ["component", "data", "dictionary", "layout", "website"].map((name) => ({
	name,
}));

module.exports = {
	types,
	scopes,
	messages: {
		type: "Type of change that you're committing:",
		scope: "\nSCOPE of this change (optional):",
		customScope: "Custom SCOPE of this change:",
		subject: "SHORT, IMPERATIVE tense description:\n",
		body: "LONGER description change (optional):\n",
		breaking: "BREAKING CHANGES (optional):\n",
		footer: "CLOSED ISSUES (optional):\n",
		confirmCommit: "Are you sure you want to commit?",
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	subjectLimit: 60,
	askForBreakingChangeFirst: false,
};
