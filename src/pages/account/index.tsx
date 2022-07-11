import classNames from "classnames";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Layout } from "../../components/layout/layout";

const AccountPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					appBarTitle="Account"
					hasBottomTabBar
					bottomTabBarIndex={3}
				>
					<div className="column">
						<p>Account page</p>
					</div>

					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column is-3 is-narrow">
								<figure className="image">
									<img
										className="is-rounded"
										src="https://bulma.io/images/placeholders/128x128.png"
									/>
								</figure>
							</div>
							<div className="column">
								<p className="" style={{ fontWeight: "bold" }}>
									Name
								</p>
								<p className="">Email</p>
								<p className="">Company</p>
							</div>
							<div className="column has-text-right mt-5">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames("column is-full mt-3 pb-0")}
						style={{ fontSize: "0.75rem" }}
					>
						Account Preferences
					</div>
					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column">
								<p className="">Settings</p>
							</div>
							<div className="column has-text-right">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column">
								<p className="">Intergrations</p>
							</div>
							<div className="column has-text-right">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames("column is-full mt-3 pb-0")}
						style={{ fontSize: "0.75rem" }}
					>
						Customer Support
					</div>

					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column">
								<p className="">User Guide</p>
							</div>
							<div className="column has-text-right">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column">
								<p className="">Chat With Us</p>
							</div>
							<div className="column has-text-right">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames("column is-full mt-3 pb-0")}
						style={{ fontSize: "0.75rem" }}
					>
						Invite Friend
					</div>
					<div
						className={classNames(
							"column is-full has-background-white has-text-black my-1"
						)}
					>
						<div className="columns is-mobile">
							<div className="column">
								<p className="">Get Free Credits</p>
							</div>
							<div className="column has-text-right">
								<span className="icon">
									<MdKeyboardArrowRight size={18} />
								</span>
							</div>
						</div>
					</div>

					<div
						className={classNames(
							"column is-full has-background-white has-text-danger has-text-centered mt-6"
						)}
						onClick={() => {
							console.log("log out");
						}}
					>
						Log Out
					</div>
				</Layout>
			</main>
		</>
	);
};

export default AccountPage;
