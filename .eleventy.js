module.exports = function (eleventyConfig) {
	require('dotenv').config();

	eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
	eleventyConfig.addLayoutAlias("sidebox", "layouts/sidebox.njk");
	eleventyConfig.addLayoutAlias("standard", "layouts/standard.njk");
	eleventyConfig.addLayoutAlias("banner", "layouts/banner.njk");
	eleventyConfig.addLayoutAlias("event", "layouts/event.njk");

	// eleventyConfig.addPassthroughCopy({"src/built/"});

	return {
		htmlTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		markdownTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
	};
};
