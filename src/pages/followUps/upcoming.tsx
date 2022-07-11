import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { Layout } from "../../components/layout/layout";

import * as styles from "../../components/listFollowUps/listFollowUps.module.scss";

const emptyDummyList: any[] = [];

const UpcomingPage = (): JSX.Element => {
  return (
    <>
      <main>
        <Layout backButtonLink={"/followUps"} appBarTitle="Upcoming">
          <div className="column">
            <p>Upcoming page</p>
          </div>

          {emptyDummyList && emptyDummyList.length === 0 && (
            <div className="column is-6 is-offset-3 has-text-centered">
              <div className="block mb-1">
                <BiCalendarAlt size={50} />

                <h1 className={styles.title}>No upcoming follow ups</h1>
                <p>Text Content</p>
              </div>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default UpcomingPage;
