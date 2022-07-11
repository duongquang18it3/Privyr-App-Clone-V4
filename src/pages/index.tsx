import React from "react";
import { Layout } from "../components/layout/layout";
import { useAppState } from "../components/appContext/AppContext";
import { ListClients } from "../components/listClients/listClients";
import { ListTeam } from "../components/listTeam/listTeam";
import { ListGroup } from "../components/listGroup/listGroup";

const ListTabBar = ["All clients", "Team", "Groups"];

const IndexPage = (): JSX.Element => {
  const appState = useAppState();

  return (
    <>
      <main>
        <Layout
          searchPlaceHolder={`clients & phonebook...`}
          listTabBar={ListTabBar}
          hasFloatingButton
          hasBottomTabBar
          bottomTabBarIndex={0}
        >
          <div className="column">
            <p> {appState.activeTab}</p>
          </div>

          {appState.activeTab === ListTabBar[0].toLowerCase() && (
            <div className="block">
              <ListClients />
            </div>
          )}

          {appState.activeTab === ListTabBar[1].toLowerCase() && (
            <div className="block">
              <ListTeam />
            </div>
          )}

          {appState.activeTab === ListTabBar[2].toLowerCase() && (
            <div className="block">
              <ListGroup />
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default IndexPage;
