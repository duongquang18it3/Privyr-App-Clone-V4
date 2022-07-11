import React from "react";
import { Layout } from "../../components/layout/layout";
import { SimpleTimeline } from "../../components/timeline/simpleTimeline";

const ClientDetailPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout backButtonLink={"/"} appBarTitle="Client detail">
					<div className="column">
						<p>client page</p>
					</div>
					<SimpleTimeline />
				</Layout>
			</main>
		</>
	);
};

export default ClientDetailPage;
