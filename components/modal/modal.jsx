import { useEffect } from "react";
import styled from "styled-components";
import { fontColor, primaryColor } from "../../libs/color";
const ModalComp = styled.div`
  .modal-body,
  .modal-header,
  .modal-footer {
    color: ${fontColor};
    background-color: ${primaryColor};
  }
  .modal-content {
    border: solid ${fontColor};
    box-shadow: 10px 10px 8px #888888;
  }
  .show.center {
    display: flex !important;
    align-items: center;
    height: 100%;
    .modal-dialog {
      width: 100%;
    }
  }

  .show {
    z-index: 9999999;
  }

  .spinner-grow {
    --bs-spinner-width: 1em;
    --bs-spinner-height: 1em;
  }
`;

const Modal = ({
  modalID,
  labelID,
  label,
  hasFooter,
  modalBody,
  center,
  hasSubmitBtn,
  submitBtnFunc,
  submitBtnLabel,
  submitBtnID,
  containBody,
}) => {
  //to show bootstrap modal
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <ModalComp>
      <div
        className={`modal fade ${center ? "center" : ""}`}
        id={modalID}
        role="dialog"
        aria-labelledby={labelID}
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={labelID}>
                {label}
              </h5>
              <button
                type="button"
                className="btn close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={containBody ? { height: "500px", overflow: "auto" } : {}}
            >
              {modalBody()}
            </div>
            {hasFooter ? (
              <div className="modal-footer">
                {hasSubmitBtn ? (
                  <button
                    onClick={submitBtnFunc}
                    id={submitBtnID ? submitBtnID : ""}
                    type="button"
                    className="btn btn-primary"
                  >
                    {submitBtnLabel}
                  </button>
                ) : (
                  <></>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ModalComp>
  );
};

export default Modal;
