export async function createPages(params) {
	// Create pages dynamically
	// Wait for all promises to be resolved before finishing this function
	await Promise.all([]);
}

export async function onPostBuild(params) {}

export async function onCreatePage({ page, actions }) {
	if (page.path.match(/^\/clients\/clientDetail/)) {
		page.matchPath = "/clients/clientDetail/*";

		actions.createPage(page);
	}

	if (page.path.match(/^\/content\/messageDetail/)) {
		page.matchPath = "/content/messageDetail/*";

		actions.createPage(page);
	}

	if (page.path.match(/^\/content\/fileDetail/)) {
		page.matchPath = "/content/fileDetail/*";

		actions.createPage(page);
	}
}
