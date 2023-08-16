import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import { Fade } from "react-awesome-reveal";
import CusButton from "../cusButton/cusButton";
import {
  addReservationData,
  findReservationDataByEmail,
} from "../../libs/web-util";
import Modal from "../modal/modal";
import { createRoot } from "react-dom/client";
import { updateReservationData } from "../../libs/web-util";
import { fontColor, primaryColor } from "../../libs/color";

const RsvpComp = styled.div`
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: ${fontColor};

  .font-secondary {
    z-index: 1;
  }

  h1 {
    height 10vh;
  }

  .hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }

  .show {
    visibility: visible;
    opacity: 1;
  }

  .rsvp {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease;
  }

  .container {
    max-width: 720px;
  }

  .button-container {
    justify-content: center;
    display: flex;
  }

  .spinner-grow {
    --bs-spinner-width: 1em;
    --bs-spinner-height: 1em;
  }

  .errorValidationMessage{
    color: red;
    text-align: center;
    font-weight: 700;
  }
`;

const RSVP = ({ webSiteSetting, mheight, iheight, inputWidth, maxHeight }) => {
  const [pin, setPin] = useState("");
  const [dataID, setDataID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState(0);
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [hasPin, setHasPin] = useState(false);
  const [errorOnField, setErrorOnField] = useState(false);
  const [errorOnPin, setErrorOnPin] = useState(false);
  const [completeMessage, setCompleteMessage] = useState("");

  async function findReservationData(email) {
    let resData = await findReservationDataByEmail(email);
    console.log(resData);
    if (resData) {
      return resData;
    } else {
      console.log("show error message");
    }
  }

  function validateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email) ? true : false;
  }

  function validatePhoneNumber(phoneNr) {
    let re =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/im;

    return re.test(phoneNr) ? true : false;
  }

  async function validatePin(pin, email) {
    const btn = document.getElementById("pinOkBtn");
    var temp = document.createElement("div");
    createRoot(temp).render("ok");

    var spinner = document.createElement("div");
    createRoot(spinner).render(
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    btn.replaceChild(spinner, btn.childNodes[0]);
    if (btoa(pin) === webSiteSetting.pin && email && validateEmail(email)) {
      let data = await findReservationData(email.toLowerCase());
      if (data._id) {
        setDataID(data._id);
        setName(data.name);
        setSurname(data.surname);
        setAmount(data.amount);
        setContactNo(data.phoneNr);
        setEmail(data.email);
        setAttendance(data.attending);
        setMessage(data.comment);
        const { Modal } = require("bootstrap");
        const myModal = new Modal("#dataMessage");

        myModal.show();
      } else {
        setDataID("");
        setName("");
        setSurname("");
        setAmount(0);
        setContactNo("");
        setAttendance("");
        setMessage("");
      }

      setHasPin(true);
      setErrorOnPin(false);
    } else {
      setErrorOnPin(true);
    }

    btn.replaceChild(temp, btn.childNodes[0]);
  }

  async function submitClicked() {
    if (
      name !== "" &&
      surname !== "" &&
      amount !== "" &&
      contactNo !== "" &&
      validatePhoneNumber(contactNo) &&
      email !== "" &&
      validateEmail(email) &&
      attendance !== "" &&
      message !== ""
    ) {
      let emailInUse = false;
      const btn = document.getElementById("reSubmitBtn");
      var temp = document.createElement("div");
      createRoot(temp).render("ok");

      var spinner = document.createElement("div");
      createRoot(spinner).render(
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );

      btn.replaceChild(spinner, btn.childNodes[0]);

      if (dataID !== "") {
        let resData = await findReservationDataByEmail(email.toLowerCase());
        if (resData._id && resData._id !== dataID) {
          setCompleteMessage("Email Already in use");
          emailInUse = true;
        } else {
          let res = await updateReservationData({
            _id: dataID,
            name: name,
            surname: surname,
            phoneNr: contactNo,
            email: email.toLowerCase(),
            attending: attendance,
            amount: parseInt(amount),
            comment: message,
          });
          if (res.acknowledged) {
            setCompleteMessage(
              "Your Details has been updated, you can update it again anytime."
            );
          } else {
            setCompleteMessage(
              "An Error has occured please contact organizer."
            );
          }
        }
      } else {
        let resData = await findReservationDataByEmail(email.toLowerCase());
        if (resData._id) {
          setCompleteMessage("Email Already in use");
          emailInUse = true;
        } else {
          let res = await addReservationData({
            name: name,
            surname: surname,
            phoneNr: contactNo,
            email: email.toLowerCase(),
            attending: attendance,
            amount: parseInt(amount),
            comment: message,
          });
          if (res.acknowledged) {
            setCompleteMessage(
              "Your Details has been added, you can update it again anytime. \n Thank You for your reservation!!!"
            );
          } else {
            setCompleteMessage(
              "An Error has occured please contact organizer."
            );
          }
        }
      }
      if (!emailInUse) {
        clearOnSubmit();
      }
      setErrorOnField(false);
      btn.replaceChild(temp, btn.childNodes[0]);

      const { Modal } = require("bootstrap");
      const myModal = new Modal("#completeMessage");

      myModal.show();
    } else {
      console.log("sad no data");
      setErrorOnField(true);
    }
  }

  function backButton() {
    setHasPin(false);
  }

  function clearOnSubmit() {
    // console.log(attendance);
    setHasPin(false);
    setDataID("");
    setName("");
    setSurname("");
    setAmount(0);
    setContactNo("");
    setAttendance("");
    setMessage("");
    setEmail("");
    setPin("");
  }

  function clearData() {
    setName("");
    setSurname("");
    setAmount(0);
    setContactNo("");
    setAttendance("");
    setMessage("");
  }

  function completeModalBody() {
    return (
      <>
        <p>{completeMessage}</p>
      </>
    );
  }

  function modalDataMessageBody() {
    return (
      <>
        <p>Reservation Data Found, you can edit your datas here.</p>
      </>
    );
  }

  return (
    <RsvpComp
      id="rsvp"
      style={{
        minHeight: mheight ? mheight : "100vh",
      }}
    >
      <Modal
        modalID={"dataMessage"}
        labelID={"dataMessageLabel"}
        label={"Reservation"}
        hasFooter={true}
        modalBody={modalDataMessageBody}
      />
      <Modal
        modalID={"completeMessage"}
        labelID={"completeMessageLabel"}
        label={"Submitted"}
        hasFooter={true}
        modalBody={completeModalBody}
        center={true}
      />
      <h1 className="font-secondary display-4">RSVP</h1>
      <div
        style={{
          height: iheight ? iheight : "70vh",
          overflow: hasPin ? "auto" : "hidden",
          maxHeight: maxHeight ? maxHeight : "",
        }}
      >
        {hasPin ? (
          <div>
            <div className="container">
              <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Name"
                      type="text"
                      value={name}
                      onValueChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Surname"
                      value={surname}
                      type="text"
                      onValueChange={(e) => {
                        setSurname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Amount"
                      value={amount}
                      type="number"
                      maxValue={6}
                      onValueChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Contact Number"
                      value={contactNo}
                      type="text"
                      onValueChange={(e) => {
                        e;
                        setContactNo(e.target.value);
                      }}
                      placeholder={"e.g. 0213456789"}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Email"
                      value={email}
                      type="text"
                      disabled={dataID ? false : true}
                      onValueChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Attendance"
                      value={attendance}
                      type="select"
                      options={["Yes", "No"]}
                      onValueChange={(e) => {
                        setAttendance(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 p-0">
                  <div className="h-100 d-flex flex-column align-items-center ">
                    <Input
                      width={inputWidth ? inputWidth : undefined}
                      title="Message"
                      value={message}
                      type="textarea"
                      onValueChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <p className="errorValidationMessage" hidden={!errorOnField}>
                  *Please ensure that all fields are valid and filled up*
                </p>
              </div>
            </div>
            <div className="button-container">
              <CusButton
                title={"Back"}
                clicked={() => {
                  backButton();
                }}
              />
              <CusButton
                title={"Clear"}
                clicked={() => {
                  clearData();
                }}
              />
              <CusButton
                id="reSubmitBtn"
                title={"Submit"}
                clicked={() => {
                  submitClicked();
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Fade direction="up" duration={1000} triggerOnce={true}>
              <Input
                width={inputWidth ? inputWidth : undefined}
                title="Email"
                value={email}
                type="text"
                onKeyPress={(e) => {
                  if (e.key.toUpperCase() === "ENTER") {
                    validatePin(pin, email);
                  }
                }}
                onValueChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                width={inputWidth ? inputWidth : undefined}
                title="Pin"
                type="password"
                value={pin}
                onKeyPress={(e) => {
                  if (e.key.toUpperCase() === "ENTER") {
                    validatePin(pin, email);
                  }
                }}
                onValueChange={(e) => {
                  setPin(e.target.value);
                }}
              />
              <p className="errorValidationMessage" hidden={!errorOnPin}>
                *Please ensure that its a valid email and correct pin*
              </p>
              <CusButton
                id="pinOkBtn"
                title={"ok"}
                clicked={() => {
                  validatePin(pin, email);
                }}
              />
            </Fade>
          </div>
        )}
      </div>
    </RsvpComp>
  );
};

export default RSVP;
