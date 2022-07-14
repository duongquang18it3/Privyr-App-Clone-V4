import classNames from "classnames";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useWindowResize } from "../../utils/hooks/useWindowResize";
import * as styles from "./clientCard.module.scss";

type clientCardProps = {
  isLead?: boolean;
  img?: string;
  name: string;
  company?: string;
  group?: string;
};

export const ClientCard = ({
  isLead = false,
  img,
  name,
  company,
  group,
}: clientCardProps): JSX.Element => {
  const [width] = useWindowResize();

  return (
    <>
      <div
        className={classNames("box has-background-white pb-2 m-2", {
          [styles.box]: isLead,
        })}
      >
        <div className="columns">
          <div className="column is-3">
            <div className="columns is-vcentered is-mobile m-0">
              <div className="column is-narrow">
                <figure
                  className={classNames("image", {
                    ["is-128x128"]: width > 768,
                  })}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <img
                    className="is-rounded"
                    src={
                      img ?? "https://bulma.io/images/placeholders/128x128.png"
                    }
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <p className="" style={{ fontWeight: "bold" }}>
              {name}
            </p>
            <p className="">{company ?? "Unknown"}</p>
            <p className="">{group ?? "Unknown"}</p>
          </div>
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
        {isLead && <div className={classNames(styles.leadTag)}>LEAD</div>}
      </div>
    </>
  );
};