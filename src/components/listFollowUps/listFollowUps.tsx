import classNames from "classnames";
import { navigate } from "gatsby";
import React from "react";
import {
  BiCalendarStar,
  BiCalendarExclamation,
  BiCalendarEvent,
  BiCalendarAlt,
} from "react-icons/bi";
import { ImArrowDownRight2 } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";

import * as styles from "./listFollowUps.module.scss";

const dummyList: any[] = [];
const emptyDummyList: any[] = [];

export const ListFollowUps = (): JSX.Element => {
  return (
    <>
      <div
        className={classNames(
          "column is-full my-1 has-text-danger",
          styles.verticalButton
        )}
        onClick={() => {
          navigate(`/followUps/overdue/`);
        }}
      >
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon-text">
              <span className="icon">
                <BiCalendarExclamation size={18} />
              </span>
              <span className="ml-2">OVERDUE</span>
            </span>
          </div>
          <div className="column has-text-right">
            <span className="icon-text">
              <span className="mr-2">0</span>
              <span className="icon">
                <MdKeyboardArrowRight size={18} />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "column is-full has-text-black my-1",
          styles.verticalButton
        )}
        onClick={() => {
          navigate(`/followUps/upcoming/`);
        }}
      >
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon-text">
              <span className="icon">
                <BiCalendarEvent size={18} />
              </span>
              <span className="ml-2">UPCOMING</span>
            </span>
          </div>
          <div className="column has-text-right">
            <span className="icon-text">
              <span className="mr-2">0</span>
              <span className="icon">
                <MdKeyboardArrowRight size={18} />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        className={classNames("column is-full my-1", styles.verticalButton)}
        onClick={() => {
          navigate(`/followUps/someday/`);
        }}
      >
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon-text">
              <span className="icon">
                <BiCalendarAlt size={18} />
              </span>
              <span className="ml-2">SOMEDAY</span>
            </span>
          </div>
          <div className="column has-text-right">
            <span className="icon-text">
              <span className="mr-2">0</span>
              <span className="icon">
                <MdKeyboardArrowRight size={18} />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "column has-text-link mt-1",
          styles.verticalButton
        )}
      >
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon-text">
              <span className="icon">
                <BiCalendarStar size={18} />
              </span>
              <span className="ml-2">TODAY</span>
            </span>
          </div>
          <div className="column has-text-right">
            <span className="icon-text">
              <span className="mr-2">0</span>
              <span className="icon">
                <MdKeyboardArrowRight size={18} />
              </span>
            </span>
          </div>
        </div>
      </div>

      {emptyDummyList && emptyDummyList.length === 0 && (
        <div className="column is-6 is-offset-3 has-text-centered has-background-white">
          <div className="block mb-1">
            <BiCalendarAlt className={styles.introIcon} size={50} />

            <h1 className={styles.title}>No follow ups due today</h1>
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
                <p className={classNames("mb-1", styles.title)}>text {index}</p>
                <p className={classNames("my-3")}>
                  Privyr support WhatsApp line. Feel free to message with any
                  questions or feedback
                </p>
                <p className={classNames("has-text-grey-light mt-3")}>
                  <ImArrowDownRight2 className="mr-2" />
                  Jul 06 - 09:35 AM
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
