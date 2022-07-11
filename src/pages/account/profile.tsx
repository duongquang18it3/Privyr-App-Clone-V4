import classNames from "classnames";
import React, { useCallback, useRef, useState } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FullWidthInput } from "../../components/fullWidthInput/fullWidthInput";
import { Layout } from "../../components/layout/layout";
import { useWindowResize } from "../../utils/hooks/useWindowResize";

const ProfilePage = (): JSX.Element => {
  const [width] = useWindowResize();
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [phoneCode, setPhoneCode] = useState<string>();
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const handleSelectPhoneCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value && e.target.value !== phoneCode) {
        setPhoneCode(e.target.value);
      }
    },
    [phoneCode]
  );

  const [whatsappPhoneCode, setWhatsappPhoneCode] = useState<string>();
  const whatsappPhoneNumberRef = useRef<HTMLInputElement>(null);

  const handleSelectWhatsappPhoneCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value && e.target.value !== phoneCode) {
        setWhatsappPhoneCode(e.target.value);
      }
    },
    [phoneCode]
  );

  return (
    <>
      <main>
        <Layout backButtonLink={"/account"} appBarTitle="Profile">
          <div className="column">
            <p>Profile page</p>
          </div>

          <div
            className={classNames(
              "column is-full has-background-white has-text-black my-1"
            )}
          >
            <div className="columns is-vcentered is-mobile">
              <div className="column is-3 is-narrow">
                <figure
                  className={classNames("image", {
                    ["is-128x128"]: width > 768,
                  })}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <img
                    className="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>
              </div>
              <div className="column">
                <p className="">Profile Photo</p>
                <a className="">Change photo</a>
              </div>
              <div className="column has-text-right">
                <span className="icon">
                  <MdKeyboardArrowRight size={18} />
                </span>
              </div>
            </div>
          </div>

          <FullWidthInput name="Name" placeHolder="name" ref={nameRef} />
          <FullWidthInput
            name="Email"
            placeHolder="email"
            hasIconRight
            ref={emailRef}
          />

          <div className="my-4"></div>
          <FullWidthInput
            ref={phoneNumberRef}
            type="phoneNumber"
            name="Phone number"
            placeHolder="Phone number"
            phoneCode={phoneCode}
            handleSelectPhoneCode={handleSelectPhoneCode}
          />
          <FullWidthInput
            ref={whatsappPhoneNumberRef}
            type="phoneNumber"
            name="Whatsapp number"
            placeHolder="Whatsapp number"
            phoneCode={whatsappPhoneCode}
            handleSelectPhoneCode={handleSelectWhatsappPhoneCode}
          />

          <div className="my-4"></div>
          <FullWidthInput
            name="Company Name"
            placeHolder="Company name"
            ref={companyRef}
          />

          <div
            className={classNames(
              "column is-full has-background-primary has-text-white has-text-centered my-6 mx-2"
            )}
            onClick={() => {
              console.log("Save");
            }}
          >
            <span className="icon-text">
              <span className="icon">
                <IoSaveOutline size={18} />
              </span>
              <span className="mr-2">Save</span>
            </span>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProfilePage;
