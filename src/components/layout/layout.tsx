import React, { useEffect, useState } from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
import { FloatButton } from "../floatButton/floatButton";
import { TabBar } from "../tabBar/tabBar";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import "./main.css";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";

type layoutProps = {
	backButtonLink?: string;
	appBarTitle?: string;
	searchPlaceHolder?: string;
	searchPlaceHolderByTab?: boolean;
	optionButton?: boolean;
	listTabBar?: string[];
	activeTabIndex?: number;
	hasFloatingButton?: boolean;
	hasBottomTabBar?: boolean;
	bottomTabBarIndex?: number;
	children: React.ReactNode;
};

export const Layout = ({
	backButtonLink,
	appBarTitle = "",
	searchPlaceHolder = "",
	searchPlaceHolderByTab = false,
	optionButton = false,
	listTabBar,
	activeTabIndex = 0,
	hasFloatingButton = false,
	hasBottomTabBar = false,
	bottomTabBarIndex,
	children,
}: layoutProps): JSX.Element => {
	const appState = useAppState();
	const appStateDispatch = useAppStateDispatch();

	const [innerHeight, setInnerHeight] = useState<number>();

	useEffect(() => {
		if (!listTabBar || listTabBar.length === 0) {
			appStateDispatch({
				type: "setTabActive",
			});
		}

		if (!innerHeight) {
			setInnerHeight(window.innerHeight);
		}
	}, [listTabBar, appStateDispatch]);

	return (
		<>
			<AppBar
				backButtonLink={backButtonLink}
				onlySearchBar={appBarTitle === undefined || appBarTitle === ""}
				optionButton={optionButton}
				searchPlaceHolderByTab={searchPlaceHolderByTab}
				searchPlaceHolder={
					searchPlaceHolderByTab ? undefined : searchPlaceHolder
				}
				title={appBarTitle}
			/>
			{listTabBar && listTabBar.length > 0 ? (
				<TabBar listTab={listTabBar} activeTabIndex={activeTabIndex} />
			) : (
				<></>
			)}
			<div
				className="has-background-light"
				style={{
					marginTop:
						listTabBar && listTabBar.length > 0
							? "calc(5.75rem + 1px)"
							: appBarTitle === undefined || appBarTitle === ""
							? "4rem"
							: "3.25rem",
					marginBottom: hasBottomTabBar ? "4rem" : "0",
					minHeight: `calc(${
						innerHeight ? `${innerHeight}px` : "100vh"
					} - ${
						listTabBar && listTabBar.length > 0
							? "calc(5.75rem + 1px)"
							: appBarTitle === undefined || appBarTitle === ""
							? "4rem"
							: "3.25rem"
					} - ${hasBottomTabBar ? "4rem" : "0px"})`,
				}}
			>
				{children}
			</div>
			{hasFloatingButton ? <FloatButton /> : <></>}
			{hasBottomTabBar ? (
				<BottomTabBar activeIndex={bottomTabBarIndex || 0} />
			) : (
				<></>
			)}
		</>
	);
};
