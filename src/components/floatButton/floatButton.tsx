import classNames from "classnames";
import React, { useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";

import * as styles from "./floatButton.module.scss";

export const FloatButton = (): JSX.Element => {
  const appState = useAppState();
  const appStateDispatch = useAppStateDispatch();

  const handleToggle = useCallback(() => {
    appStateDispatch({
      type: "toggleActiveFloatPopUp",
    });
  }, [appStateDispatch]);

  return (
    <>
      <div className={classNames("mx-5 my-3", styles.floatButton)}>
        <button className="button is-info" onClick={handleToggle}>
          {!appState.isActiveFloatPopUp && (
            <span
              className={classNames("icon", {
                [styles.isHidden]: appState.isActiveFloatPopUp,
              })}
            >
              <FaPlus />
            </span>
          )}
          {appState.isActiveFloatPopUp && (
            <span
              className={classNames("icon", {
                [styles.isHidden]: !appState.isActiveFloatPopUp,
              })}
            >
              <MdClose />
            </span>
          )}
        </button>
      </div>
    </>
  );
};
