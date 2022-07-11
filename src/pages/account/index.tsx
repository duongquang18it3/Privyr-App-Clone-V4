import classNames from "classnames";
import { navigate } from "gatsby";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FullWidthButton } from "../../components/fullWidthButton/fullWidthButton";
import { Layout } from "../../components/layout/layout";
import { useWindowResize } from "../../utils/hooks/useWindowResize";

const AccountPage = (): JSX.Element => {
  const [width] = useWindowResize();

  return (
    <>
      <main>
        <Layout appBarTitle="Account" hasBottomTabBar bottomTabBarIndex={3}>
          <div className="column">
            <p>Account page</p>
          </div>

          <div
            className={classNames(
              "column is-full has-background-white has-text-black my-1"
            )}
            onClick={() => {
              navigate("/account/");
            }}
          >
            <div className="columns is-vcentered is-mobile">
              <div className="column is-3 is-narrow">
                <figure
                  className={classNames("image", {
                    ["is-128x128"]: width > 768,
                  })}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
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
                <p className="">Demo Company</p>
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
            Account Preferences
          </div>
          <FullWidthButton name="Settings" link="/account/settings" />
          <FullWidthButton name="Integrations" link="" />

          <div
            className={classNames("column is-full mt-3 pb-0")}
            style={{ fontSize: "0.75rem" }}
          >
            Customer Support
          </div>
          <FullWidthButton name="User Guide" link="" />
          <FullWidthButton name="Chat With Us" link="" />

          <div
            className={classNames("column is-full mt-3 pb-0")}
            style={{ fontSize: "0.75rem" }}
          >
            Invite Friend
          </div>
          <FullWidthButton name="Get Free Credits" link="" />

          <div
            className={classNames(
              "column is-full has-background-white has-text-danger has-text-centered my-6"
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
