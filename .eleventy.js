module.exports = function (eleventyConfig) {
	eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
	eleventyConfig.addLayoutAlias("index", "layouts/index.njk");
	eleventyConfig.addLayoutAlias("sidebox", "layouts/sidebox.njk");
	eleventyConfig.addLayoutAlias("standard", "layouts/standard.njk");
	eleventyConfig.addLayoutAlias("banner", "layouts/banner.njk");
	eleventyConfig.addLayoutAlias("event", "layouts/event.njk");

	eleventyConfig.setDataDeepMerge(true);

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
