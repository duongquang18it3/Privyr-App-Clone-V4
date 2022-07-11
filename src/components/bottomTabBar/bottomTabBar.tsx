import React from "react";
import { BottomTabBarItem } from "./bottomTabBarItem";
import { MdGroups, MdManageAccounts } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import classNames from "classnames";
import { useWindowResize } from "../../utils/hooks/useWindowResize";

import * as styles from "./bottomTabBar.module.scss";

type barPropsType = {
	activeIndex: number;
};

const defaultIconSize = 20;

export const BottomTabBar = ({
	activeIndex = 0,
}: barPropsType): JSX.Element => {
	const [width] = useWindowResize();

	return (
		<>
			<div className={styles.spacer}></div>
			<div className={classNames("box p-0", styles.bottomTabBar)}>
				<div
					className={classNames("columns m-0", {
						["is-mobile"]: width < 768,
					})}
				>
					<BottomTabBarItem
						isActive={activeIndex === 0}
						icon={<MdGroups size={defaultIconSize} />}
						tabName={"Clients"}
						linkTo={"/"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 1}
						icon={<IoDocumentText size={defaultIconSize} />}
						tabName={"Content"}
						linkTo={"/content"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 2}
						icon={<FaCalendarCheck size={defaultIconSize} />}
						tabName={"Follow Ups"}
						linkTo={"/followUps"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 3}
						icon={<MdManageAccounts size={defaultIconSize} />}
						tabName={"Account"}
						linkTo={"/account"}
					/>
				</div>
			</div>
		</>
	);
};
