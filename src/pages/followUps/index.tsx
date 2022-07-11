import React from "react";
import { Layout } from "../../components/layout/layout";
import { ListFollowUps } from "../../components/listFollowUps/listFollowUps";

const FollowUpsPage = (): JSX.Element => {
  return (
    <>
      <main>
        <Layout appBarTitle="Follow-Ups" hasBottomTabBar bottomTabBarIndex={2}>
          <div className="column">
            <p>Followups page</p>
          </div>
          <ListFollowUps />
        </Layout>
      </main>
    </>
  );
};

export default FollowUpsPage;
