import classNames from "classnames";
import React from "react";
import { FaPlus } from "react-icons/fa";

import * as styles from "./floatButton.module.scss";

export const FloatButton = (): JSX.Element => {
  return (
    <>
      <div className={classNames("mx-5 my-3", styles.floatButton)}>
        <button className="button is-info">
          <span className="icon">
            <FaPlus />
          </span>
        </button>
      </div>
    </>
  );
};
