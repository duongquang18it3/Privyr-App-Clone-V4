import React from "react";
import { Layout } from "../../components/layout/layout";
import { SimpleTimeline } from "../../components/timeline/simpleTimeline";
import { IoIosCall } from "react-icons/io";
import { IoChatbubbleSharp, IoLogoWhatsapp, IoMail } from "react-icons/io5";

const ClientDetailPage = (): JSX.Element => {
  return (
    <>
      <main>
        <Layout backButtonLink={"/"} appBarTitle="Client detail">
          <div className="column">
            <p>client page</p>
          </div>

          <div className="column has-background-white my-2">
            <p>Contact name</p>
            <div className="columns is-mobile m-0">
              <div className="column is-narrow">
                <button className="button is-info is-rounded">
                  <span className="icon">
                    <IoIosCall />
                  </span>
                </button>
              </div>
              <div className="column is-narrow">
                <button className="button is-info is-rounded">
                  <span className="icon">
                    <IoChatbubbleSharp />
                  </span>
                </button>
              </div>
              <div className="column is-narrow">
                <button className="button is-info is-rounded">
                  <span className="icon">
                    <IoMail />
                  </span>
                </button>
              </div>
              <div className="column is-narrow">
                <button className="button is-info is-rounded">
                  <span className="icon">
                    <IoLogoWhatsapp />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="column has-background-white my-2">
            <p>FOLLOW UP</p>
            <p>No follow up scheduled</p>
          </div>
          <div className="column has-background-white my-2">
            <p>NOTES</p>
            <p>No note</p>
          </div>

          <div className="column has-background-white my-2">
            <SimpleTimeline />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ClientDetailPage;
