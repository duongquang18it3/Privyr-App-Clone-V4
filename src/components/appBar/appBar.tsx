import classNames from "classnames";
import { Link } from "gatsby";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppState } from "../appContext/AppContext";

import * as styles from "./appBar.module.scss";

type appBarProps = {
	backButtonLink?: string;
	onlySearchBar?: boolean;
	optionButton?: boolean;
	searchPlaceHolderByTab?: boolean;
	searchPlaceHolder?: string;
	title: string;
};

export const AppBar = ({
	backButtonLink,
	onlySearchBar = true,
	optionButton = false,
	searchPlaceHolderByTab = false,
	searchPlaceHolder = "",
	title,
}: appBarProps): JSX.Element => {
	const appState = useAppState();
	const searchRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<nav
				className={classNames("navbar is-fixed-top", styles.navbar)}
				role="navigation"
				aria-label="main navigation"
			>
				<div className={classNames("navbar-start", styles.navbarStart)}>
					<div className="columns is-mobile m-0">
						{backButtonLink && (
							<div
								className={classNames(
									"column",
									// { ["is-narrow"]: optionButton },
									{ ["is-3"]: !optionButton }
								)}
							>
								<Link to={backButtonLink}>
									<button className="button is-white">
										<MdArrowBackIosNew />
									</button>
								</Link>
							</div>
						)}
						<div className="column  has-text-centered">
							{onlySearchBar ? (
								<div className="control is-expanded has-icons-left">
									<input
										className="input"
										type="text"
										placeholder={`Search ${
											searchPlaceHolderByTab
												? `${
														appState.activeTab ||
														searchPlaceHolder
												  }...`
												: searchPlaceHolder
										}`}
										ref={searchRef}
									/>
									<span className="icon is-small is-left">
										<FaSearch />
									</span>
								</div>
							) : (
								<>
									<h1 className={styles.title}>{title}</h1>
								</>
							)}
						</div>

						{backButtonLink && (
							<div
								className={classNames(
									"column has-text-right",
									// { ["is-narrow"]: optionButton },
									{ ["is-3"]: !optionButton }
								)}
							>
								{optionButton && (
									<button className="button is-white">
										Options
									</button>
								)}
							</div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};
