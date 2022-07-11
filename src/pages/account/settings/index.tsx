import classNames from "classnames";
import { navigate } from "gatsby";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FullWidthButton } from "../../../components/fullWidthButton/fullWidthButton";
import { Layout } from "../../../components/layout/layout";

const listSetting = [
  //   { name: "Notifications", link: "/settings//notifications" },
  //   { name: "Personalization", link: "/settings/personalization" },
  //   { name: "Follow Ups", link: "/settings/followUps" },
  //   { name: "New Lead Settings", link: "/settings/NewLead" },
  //   { name: "File & Page Branding", link: "/settings/fileAndPageBranding" },
  { name: "Notifications", link: "/" },
  { name: "Personalization", link: "/" },
  { name: "Follow Ups", link: "/" },
  { name: "New Lead Settings", link: "/" },
  { name: "File & Page Branding", link: "/" },
];

const SettingsPage = (): JSX.Element => {
  return (
    <>
      <main>
        <Layout
          appBarTitle="Settings"
          backButtonLink="/account"
          hasBottomTabBar
          bottomTabBarIndex={3}
        >
          <div className="column">
            <p>Setting list page</p>
          </div>

          {listSetting &&
            listSetting.length > 0 &&
            listSetting.map((item, index) => (
              <FullWidthButton key={index} name={item.name} link={item.link} />
            ))}
        </Layout>
      </main>
    </>
  );
};

export default SettingsPage;
