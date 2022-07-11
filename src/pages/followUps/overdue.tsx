import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { Layout } from "../../components/layout/layout";

import * as styles from "../../components/listFollowUps/listFollowUps.module.scss";

const emptyDummyList: any[] = [];

const OverduePage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout backButtonLink={"/followUps"} appBarTitle="Overdue">
					<div className="column">
						<p>Overdue page</p>
					</div>
					{emptyDummyList && emptyDummyList.length === 0 && (
						<div className="column is-6 is-offset-3 has-text-centered">
							<div className="block mb-1">
								<FiThumbsUp
									size={50}
								/>

								<h1 className={styles.title}>Way to go!</h1>
								<p>You have no overdue follow ups</p>
							</div>
						</div>
					)}
				</Layout>
			</main>
		</>
	);
};

export default OverduePage;
