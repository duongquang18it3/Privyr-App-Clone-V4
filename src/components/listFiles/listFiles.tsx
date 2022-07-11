import classNames from "classnames";
import { navigate } from "gatsby";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { useWindowResize } from "../../utils/hooks/useWindowResize";

import * as styles from "./listFiles.module.scss";

const dummyList: any[] = [{}];
const emptyDummyList: any[] = [];

export const ListFiles = (): JSX.Element => {
	const [width] = useWindowResize();

	return (
		<>
			{emptyDummyList && emptyDummyList.length === 0 && (
				<div className="column is-6 is-offset-3 has-text-centered">
					<div className="block mb-1">
						<ImAttachment className={styles.introIcon} size={50} />

						<h1 className={styles.title}>Files Test Page</h1>
						<p>
						Text Content
						</p>
					</div>
				</div>
			)}

			{dummyList &&
				dummyList.length > 0 &&
				dummyList.map((item, index) => (
					<div
						key={index}
						className="column has-background-white my-1"
						onClick={() => {
							navigate(`/content/fileDetail/${index}`);
						}}
					>
						<div className="columns is-mobile m-0">
							<div
								className={classNames(
									"column is-3 has-text-centered"
								)}
							>
								<FaFilePdf
									size={
										width * 0.15 < 100 ? width * 0.15 : 100
									}
								/>
							</div>
							<div className="column is-9">
								<p className={classNames("mb-1", styles.title)}>
									Example File
								</p>
								<p className={classNames("my-3")}>
									PDF <span className="mr-2">3 pages</span>
								</p>
								<p
									className={classNames(
										"has-text-grey-light mt-3"
									)}
								>
									Not shared yet
								</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};
