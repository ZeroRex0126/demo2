import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import InfoCard from "./portalComp/infoCard/infoCard";
import {
  addReservationData,
  deleteReservationData,
  deleteReservationDatas,
  findReservationDataByEmail,
  updateReservationData,
} from "../../libs/web-util";
import Modal from "../../components/modal/modal";
import Input from "../../components/input/input";
import { createRoot } from "react-dom/client";

const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-rows: 100px 1fr 1fr;
  min-height: 100vh;
  width: 100%;
  padding: 30px 30px;

  .spinner-grow {
    --bs-spinner-width: 1em;
    --bs-spinner-height: 1em;
  }

  .dbFunc {
    gap: 2px;
    display: inline-flex;
    .filterBox {
      input {
        width: 8.3em;
      }
      .input-group-append button {
        position: absolute;
      }
    }
  }

  .dataTableContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1 / 4;
    grid-row: 2 / 5;
    width: 100%;
    .dt {
      height: 100%;
      max-width: 100%;
      width: 100%;
    }
  }
`;

const PortalHome = ({ GetData, reservation }) => {
  const [columns, setColumns] = useState([]);
  const [tableData, setTableData] = useState(reservation);
  const [selectedRow, setSelectedRow] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  // modal values
  const [dataID, setDataID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState(0);
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [errorOnField, setErrorOnField] = useState(false);
  const [completeMessage, setCompleteMessage] = useState("");

  // end of modal value

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

  async function submitClicked(
    dataID,
    name,
    surname,
    amount,
    contactNo,
    email,
    attendance,
    message
  ) {
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
      const { Modal } = require("bootstrap");
      const inputModal = new Modal("#inputModal");

      inputModal._isShown = true;
      const btn = document.getElementById("saveBtn");
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
        let resData = await findReservationDataByEmail(email);
        console.log(resData);
        if (resData._id && resData._id !== dataID) {
          setCompleteMessage("Email Already in use");
          emailInUse = true;
        } else {
          let res = await updateReservationData({
            _id: dataID,
            name: name,
            surname: surname,
            phoneNr: contactNo,
            email: email,
            attending: attendance,
            amount: parseInt(amount),
            comment: message,
          });
          console.log(res);
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
        let resData = await findReservationDataByEmail(email);
        if (resData._id) {
          setCompleteMessage("Email Already in use");
          emailInUse = true;
        } else {
          let res = await addReservationData({
            name: name,
            surname: surname,
            phoneNr: contactNo,
            email: email,
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
        await GetData();
        clearOnSubmit();
        setErrorOnField(false);
        inputModal.hide();
      }

      const myModal = new Modal("#completeMessage");

      myModal.show();
      btn.replaceChild(temp, btn.childNodes[0]);
    } else {
      console.log("sad no data");
      setErrorOnField(true);
    }
  }

  function clearOnSubmit() {
    setDataID("");
    setName("");
    setSurname("");
    setAmount(0);
    setContactNo("");
    setAttendance("");
    setMessage("");
    setEmail("");
  }

  async function deleteSelectedData(data) {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#deleteModal");

    myModal._isShown = true;
    const btn = document.getElementById("deleteBtn");
    var temp = document.createElement("div");
    createRoot(temp).render("ok");

    var spinner = document.createElement("div");
    createRoot(spinner).render(
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    btn.replaceChild(spinner, btn.childNodes[0]);

    await deleteReservationData(data);
    await GetData();

    btn.replaceChild(temp, btn.childNodes[0]);

    myModal.hide();
  }

  async function deleteSelectedDatas(datas) {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#deleteModal");

    myModal._isShown = true;
    const btn = document.getElementById("deleteBtn");
    var temp = document.createElement("div");
    createRoot(temp).render("ok");

    var spinner = document.createElement("div");
    createRoot(spinner).render(
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    btn.replaceChild(spinner, btn.childNodes[0]);

    await deleteReservationDatas(datas);
    await GetData();
    setSelectedRows([]);

    btn.replaceChild(temp, btn.childNodes[0]);

    myModal.hide();
  }

  function setInputModalData(type) {
    if (type) {
      switch (type.toLowerCase()) {
        case "add":
          setDataID("");
          setName("");
          setSurname("");
          setAmount(0);
          setContactNo("");
          setEmail("");
          setAttendance("");
          setMessage("");
          break;
        case "edit":
          setDataID(selectedRow._id);
          setName(selectedRow.name);
          setSurname(selectedRow.surname);
          setAmount(selectedRow.amount);
          setContactNo(selectedRow.phoneNr);
          setEmail(selectedRow.email);
          setAttendance(selectedRow.attending);
          setMessage(selectedRow.comment);
          break;

        default:
          break;
      }
    }
  }

  function generateColumns(keys) {
    var columns = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "_id" && key !== "comment") {
        columns.push({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          selector: (row) => row[key],
          sortable: true,
        });
      }
    }
    return columns;
  }

  useEffect(() => {
    if (tableData.length > 0) {
      var keys = Object.keys(tableData[0]);
      setColumns(generateColumns(keys));
    }
  }, [tableData]);

  useEffect(() => {
    setTableData(reservation);
    setSelectedRow({});
    setSelectedRows([]);
  }, [reservation]);

  //Filtering

  // modal

  function inputModalBody() {
    return (
      <>
        <div className="container">
          <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  width="auto"
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
                  width="auto"
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
                  width="auto"
                  title="Amount"
                  value={amount}
                  type="number"
                  onValueChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  width="auto"
                  title="Contact Number"
                  value={contactNo}
                  type="text"
                  onValueChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  width="auto"
                  title="Email"
                  value={email}
                  type="text"
                  onValueChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  width="auto"
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
                  title="Message"
                  value={message}
                  type="textarea"
                  onValueChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <span className="errorValidationMessage" hidden={!errorOnField}>
            *Please ensure that all fields are valid and filled up*
          </span>
        </div>
      </>
    );
  }

  function deleteModalBody() {
    return (
      <>
        <p>Are you sure you want to delete the selected reservation(s)</p>
      </>
    );
  }

  function completeModalBody() {
    return (
      <>
        <p>{completeMessage}</p>
      </>
    );
  }
  // end of modal

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setTableData(reservation);
        setFilterText("");
      }
    };

    return (
      <div className="dbFunc">
        <button
          data-bs-toggle="modal"
          data-bs-target="#inputModal"
          className="btn btn-primary"
          onClick={() => {
            setInputModalData("add");
          }}
        >
          Add
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#inputModal"
          className="btn btn-primary"
          disabled={!selectedRow._id}
          onClick={() => {
            setInputModalData("edit");
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger "
          data-bs-toggle="modal"
          disabled={!selectedRows.length}
          data-bs-target="#deleteModal"
        >
          Delete
        </button>
        <div className="filterBox">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Name"
              value={filterText}
              onChange={(v) => {
                setFilterText(v.target.value);
                setTableData(
                  reservation.filter((data) =>
                    data.name
                      .toUpperCase()
                      .includes(v.target.value.toUpperCase())
                  )
                );
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleClear}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }, [selectedRows, selectedRow, filterText, resetPaginationToggle]);

  //Filtering end

  //selecting table item

  const handleRowClick = async (row) => {
    setSelectedRow(row);
  };

  const handleSelectedRowClick = async (row) => {
    setSelectedRows(row.selectedRows);
  };

  function handleResetSelection() {
    setSelectedRows([]);
  }
  //end of selecting table item

  //custom styles

  const conditionalRowStyles = [
    {
      when: (row) => row._id === selectedRow._id,
      style: {
        backgroundColor: "#EEE",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];
  //end custom styles

  //custom methods
  function getTotalReservaion() {
    return reservation.length;
  }
  function getTotalAttending() {
    return reservation.filter((res) =>
      res.attending.toUpperCase().includes("YES")
    ).length;
  }
  function getTotalAttendingHeadCounts() {
    let count = 0;
    let comingHeads = reservation.filter((res) =>
      res.attending.toUpperCase().includes("YES")
    );
    for (let i = 0; i < comingHeads.length; i++) {
      const comingHead = comingHeads[i];

      count = count + comingHead.amount;
    }
    return count;
  }
  //end of custom methods

  //table props
  const tableProps = {
    key: JSON.stringify(reservation),
    selectableRows: true,
    onSelectedRowsChange: handleSelectedRowClick,
    title: "Reservation List",
    columns: columns,
    data: tableData,
    highlightOnHover: true,
    pointerOnHover: true,
    pagination: true,
    paginationResetDefaultPage: resetPaginationToggle,
    subHeader: true,
    subHeaderComponent: subHeaderComponentMemo,
    persistTableHead: true,
    onRowClicked: handleRowClick,
    conditionalRowStyles: conditionalRowStyles,
  };

  //end of table props

  return (
    <>
      <Modal
        modalID={"inputModal"}
        labelID={"input"}
        label={"Input"}
        hasFooter={true}
        modalBody={inputModalBody}
        center={true}
        hasSubmitBtn={true}
        submitBtnFunc={() => {
          submitClicked(
            dataID,
            name,
            surname,
            amount,
            contactNo,
            email.toLowerCase(),
            attendance,
            message
          );
        }}
        submitBtnLabel={"Save"}
        submitBtnID={"saveBtn"}
        containBody={true}
      />
      <Modal
        modalID={"deleteModal"}
        labelID={"delete"}
        label={"Delete"}
        hasFooter={true}
        modalBody={deleteModalBody}
        center={true}
        hasSubmitBtn={true}
        submitBtnFunc={() => {
          deleteSelectedDatas(selectedRows);
        }}
        submitBtnLabel={"Delete"}
        submitBtnID={"deleteBtn"}
      />
      <Modal
        modalID={"completeMessage"}
        labelID={"completeMessageLabel"}
        label={"Submitted"}
        hasFooter={true}
        modalBody={completeModalBody}
        center={true}
      />
      {/* <Modal
        modalID={"deleteConfirmationPortal"}
        labelID={"deleteConfirmationPortalLabel"}
        label={"Delete"}
        hasFooter={true}
        modalBody={inputModalBody}
        center={true}
        hasSubmitBtn={true}
        submitBtnFunc={() => {}}
        submitBtnLabel={"Save"}
      /> */}
      <Home>
        {/* <div>total {getTotalReservaion()}</div>
      <div>attending {getTotalAttending()}</div>
      <div>total head counts {getTotalAttendingHeadCounts()}</div> */}
        {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#inputModal"
        data-bs-backdrop="false"
      >
        Launch demo modal
      </button> */}
        <div>
          <InfoCard title={"Total"} count={getTotalReservaion()} />
        </div>
        <div>
          <InfoCard title={"Attending"} count={getTotalAttending()} />
        </div>
        <div>
          <InfoCard title={"Amount"} count={getTotalAttendingHeadCounts()} />
        </div>
        <div className="dataTableContainer">
          <div className="dt">
            <DataTable {...tableProps} />
          </div>
        </div>
      </Home>
    </>
  );
};

export default PortalHome;
