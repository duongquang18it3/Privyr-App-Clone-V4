import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { ImArrowDownRight2 } from "react-icons/im";

import * as styles from "./listClients.module.scss";
import { navigate } from "gatsby";
import { apiService } from "../../utils/services/apiService";
import { ClientCard } from "./clientCard";
import { ContentCard } from "./contentCard";

const dummyList: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const emptyDummyList: any[] = [];

type dataType = {
  id: number;
  name: string;
};

export const ListClients = (): JSX.Element => {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (data && data.length === 0) {
      apiService({
        url: "/get",
        body: JSON.stringify({
          model: "res.partner",
        }),
        method: "post",
      }).then((res) => {
        setData(JSON.parse(res[0].replaceAll("'", '"')));
      });
    }
  }, [data]);

  return (
    <>
      {/* <ClientCard name={"Test 1"} isLead />
      <ClientCard name={"Test 2"} /> */}

      {/* {emptyDummyList && emptyDummyList.length === 0 && (
        <div className="column is-6 is-offset-3 has-text-centered">
          <div className="block mb-1">
            <MdOutlineGroups className={styles.introIcon} size={50} />

            <h1 className={styles.title}>Welcome to your Client List</h1>
            <p>
              New leads from Facebook, your website, and other integrations will
              appear here, alongside any contacts added via your mobile app.
            </p>
          </div>
        </div>
      )} */}

      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div
            key={`${index}_${item.id}`}
            onClick={() => {
              navigate(`/clients/clientDetail/${index}`);
            }}
          >
            <ContentCard />
            <ClientCard name={item.name} />
            {/* <div className="columns is-mobile m-0">
              <div className="column is-3">
                <figure className="image">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column is-9">
                <p className={classNames("mb-1", styles.title)}>{item.name}</p>
                <p className={classNames("my-3")}>
                  Privyr support WhatsApp line. Feel free to message with any
                  questions or feedback
                </p>
                <p className={classNames("has-text-grey-light mt-3")}>
                  <ImArrowDownRight2 className="mr-2" />
                  Jul 06 - 09:35 AM
                </p>
              </div>
            </div> */}
          </div>
        ))}
    </>
  );
};
