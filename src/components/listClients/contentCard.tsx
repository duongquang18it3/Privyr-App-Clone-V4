import classNames from "classnames";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as styles from "./contentCard.module.scss";

export const ContentCard = (): JSX.Element => {
  return (
    <>
      <div className="box m-2">
        <div
          className={classNames(
            "column is-9 has-background-light",
            styles.groupName
          )}
        >
          GROUP's NAME
        </div>
        <div className="column">
          <p>Created date:</p>
          <p>Members:</p>
          <p>Description:</p>
        </div>

        <div className={classNames("has-text-right")}>
          <button className="button is-white">
            <span className="icon-text">
              <span>More</span>
              <span className="icon">
                <MdKeyboardArrowRight size={18} />
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
