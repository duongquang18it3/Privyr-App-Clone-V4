import React from "react";
import { useAppState } from "../../components/appContext/AppContext";
import { Layout } from "../../components/layout/layout";

const FileDetailPage = (): JSX.Element => {
	const appState = useAppState();

	return (
		<>
			<main>
				<Layout
					backButtonLink={"/content"}
					optionButton
					appBarTitle="File detail"
				>
					<div className="column">
						<p>File detail page</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default FileDetailPage;
