import classNames from "classnames";
import React from "react";
import { MdOutlineGroups } from "react-icons/md";
import { ImArrowDownRight2 } from "react-icons/im";

import * as styles from "./listGroup.module.scss";

const dummyList: any[] = [{}, {}, {}, {}];
const emptyDummyList: any[] = [];

export const ListGroup = (): JSX.Element => {
  return (
    <>
      {emptyDummyList && emptyDummyList.length === 0 && (
        <div className="column is-6 is-offset-3 has-text-centered">
          <div className="block mb-1">
            <MdOutlineGroups className={styles.introIcon} size={50} />

            <h1 className={styles.title}>Groups Test</h1>
            <p>Text Content</p>
          </div>
        </div>
      )}

      {dummyList &&
        dummyList.length > 0 &&
        dummyList.map((item, index) => (
          <div key={index} className="column has-background-white my-1">
            <div className="columns is-mobile m-0">
              <div className="column is-3">
                <figure className="image">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column is-9">
                <p className={classNames("mb-1", styles.title)}>Item {index}</p>
                <p className={classNames("my-3")}>Text Content</p>
                <p className={classNames("has-text-grey-light mt-3")}>
                  <ImArrowDownRight2 className="mr-2" />
                  Today 8:00 AM
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
