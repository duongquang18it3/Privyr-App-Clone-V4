import React from "react";
import { useAppState } from "../../components/appContext/AppContext";
import { Layout } from "../../components/layout/layout";
import { ListFiles } from "../../components/listFiles/listFiles";
import { ListMessages } from "../../components/listMessages/listMessages";
import { ListPages } from "../../components/listPages/listPages";

const ListTabBar = ["Messages", "Files", "Pages"];

const ContentPage = (): JSX.Element => {
	const appState = useAppState();

	return (
		<>
			<main>
				<Layout
					searchPlaceHolderByTab
					listTabBar={ListTabBar}
					hasFloatingButton
					hasBottomTabBar
					bottomTabBarIndex={1}
				>
					<div className="column">
						<p>Content page</p>

						{appState.activeTab === ListTabBar[0].toLowerCase() && (
							<div className="block">
								<ListMessages />
							</div>
						)}

						{appState.activeTab === ListTabBar[1].toLowerCase() && (
							<div className="block">
								<ListFiles />
							</div>
						)}

						{appState.activeTab === ListTabBar[2].toLowerCase() && (
							<div className="block">
								<ListPages />
							</div>
						)}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default ContentPage;
