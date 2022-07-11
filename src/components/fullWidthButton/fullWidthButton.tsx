import classNames from "classnames";
import { navigate } from "gatsby";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import * as styles from "./fullWidthButton.module.scss";

type buttonProps = {
  name: string;
  link: string;
};

export const FullWidthButton = ({ name, link }: buttonProps): JSX.Element => {
  return (
    <>
      <div
        className={classNames(
          "column is-full has-background-white has-text-black my-1",
          styles.fullWidthButton
        )}
      >
        <div
          className="columns is-mobile"
          onClick={() => {
            navigate(link);
          }}
        >
          <div className="column">
            <p className="">{name}</p>
          </div>
          <div className="column has-text-right">
            <span className="icon">
              <MdKeyboardArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
