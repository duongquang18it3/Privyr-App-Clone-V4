import React from "react";
import { Layout } from "../../components/layout/layout";

const ProfilePage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout backButtonLink={"/account"} appBarTitle="Profile">
					<div className="column">
						<p>Profile page</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default ProfilePage;
