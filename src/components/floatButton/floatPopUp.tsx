import classNames from "classnames";
import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { MdContactPhone, MdGroupAdd } from "react-icons/md";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";

import * as styles from "./floatPopUp.module.scss";

export const FloatPopUp = (): JSX.Element => {
  const appState = useAppState();
  const appStateDispatch = useAppStateDispatch();

  return (
    <>
      <div
        className={classNames("box", styles.floatPopUp, {
          [styles.isHidden]: !appState.isActiveFloatPopUp,
        })}
      >
        <div className="column has-text-right">
          <span className="icon-text has-text-info">
            <span>New contact</span>
            <span className="icon">
              <IoMdPersonAdd />
            </span>
          </span>
        </div>

        <div className="column has-text-right">
          <span className="icon-text has-text-info">
            <span>Import from phone book</span>
            <span className="icon">
              <MdContactPhone />
            </span>
          </span>
        </div>

        <div className="column has-text-right">
          <span className="icon-text has-text-info">
            <span>Create new group</span>
            <span className="icon">
              <MdGroupAdd />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};