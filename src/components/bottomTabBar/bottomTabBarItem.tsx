import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { FaHome } from "react-icons/fa";

import * as styles from "./bottomTabBar.module.scss";

type itemPropsType = {
	isActive?: boolean;
	icon: JSX.Element;
	tabName: string;
	linkTo: string;
};

export const BottomTabBarItem = ({
	isActive = false,
	icon,
	tabName,
	linkTo,
}: itemPropsType): JSX.Element => {
	return (
		<>
			<Link
				className={classNames(
					"column has-text-centered p-1",
					styles.bottomTabBarItem,
					{ [styles.active]: isActive }
				)}
				to={linkTo}
				onClick={() => {
					console.log(`click ${tabName}`);
				}}
			>
				{/* <Link > */}
					<div className="block mb-1">
						<span className="icon">{icon}</span>
					</div>
					<p>{tabName}</p>
				{/* </Link> */}
			</Link>
		</>
	);
};
