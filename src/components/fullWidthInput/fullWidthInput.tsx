import classNames from "classnames";
import React, { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";
import { PhoneNumberCodeSelect } from "../phoneNumberInput/phoneNumberCodeSelect";
import * as styles from "./fullWidthInput.module.scss";

type inputProps = {
  name: string;
  placeHolder: string;
  hasIconRight?: boolean;
  type?: string;
  phoneCode?: string;
  handleSelectPhoneCode?: any;
};

export const FullWidthInput = forwardRef<HTMLInputElement, inputProps>(
  (
    {
      name,
      placeHolder,
      hasIconRight = false,
      type,
      phoneCode,
      handleSelectPhoneCode,
    },
    ref
  ) => {
    return (
      <>
        <div
          className={classNames(
            "column is-full has-background-white has-text-black my-1"
          )}
        >
          <div className="columns is-mobile">
            <div className="column is-3">
              <p className="">{name}</p>
            </div>
            <div className="column">
              <div
                className={classNames("control", {
                  ["has-icons-right"]: hasIconRight,
                })}
              >
                {!type && (
                  <input
                    className={classNames("input", styles.isWhite)}
                    type="text"
                    placeholder={placeHolder}
                    ref={ref}
                  />
                )}
                {type && type === "number" && (
                  <input
                    className={classNames("input", styles.isWhite)}
                    type="number"
                    placeholder={placeHolder}
                    ref={ref}
                  />
                )}
                {type && type === "phoneNumber" && (
                  <div className="column p-0">
                    <div className="field has-addons">
                      <PhoneNumberCodeSelect
                        value={phoneCode || "+65"}
                        isWhite
                        handleSelect={handleSelectPhoneCode}
                      />
                      <div className="control is-expanded">
                        <input
                          className={classNames("input", styles.isWhite)}
                          type="text"
                          placeholder="Phone number"
                          ref={ref}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {hasIconRight && (
                  <span className="icon is-small is-right">
                    <FaCheck />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
