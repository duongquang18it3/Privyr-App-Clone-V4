import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";
import * as styles from "./tabBar.module.scss";

type tabBarProps = {
	listTab: string[];
	activeTabIndex: number;
};

export const TabBar = ({
	listTab,
	activeTabIndex,
}: tabBarProps): JSX.Element => {
	const appState = useAppState();
	const appStateDispatch = useAppStateDispatch();

	const [currentIndex, setCurrentIndex] = useState<number>();

	const changeTabIndex = useCallback(
		(index: number) => {
			if (index !== currentIndex) {
				setCurrentIndex(index);
				appStateDispatch({
					type: "setTabActive",
					value: listTab[index].toLowerCase(),
				});
			}
		},
		[currentIndex, appStateDispatch]
	);

	useEffect(() => {
		if (currentIndex === undefined) {
			setCurrentIndex(0);
			if (appState.activeTab !== listTab[0].toLowerCase()) {
				appStateDispatch({
					type: "setTabActive",
					value: listTab[0].toLowerCase(),
				});
			}
		}
	}, [currentIndex, listTab, appState.activeTab, appStateDispatch]);

	return (
		<>
			<div
				className={classNames(
					"tabs has-background-white",
					styles.tabBar
				)}
			>
				<ul>
					{listTab.map((item, index) => (
						<li
							key={`${item}_${index}`}
							className={classNames(styles.colorPrimary, {
								[styles.isActive]: index === currentIndex,
							})}
							onClick={() => changeTabIndex(index)}
						>
							<a>{item}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
