import React from "react";
import { useAppState } from "../../components/appContext/AppContext";
import { Layout } from "../../components/layout/layout";

const MessageDetailPage = (): JSX.Element => {
	const appState = useAppState();

	return (
		<>
			<main>
				<Layout
					backButtonLink={"/content"}
					optionButton
					appBarTitle="Message detail"
				>
					<div className="column">
						<p>Message detail page</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default MessageDetailPage;
