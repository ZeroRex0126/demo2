import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { fontColor, lineColor, primaryColor } from "../../libs/color";

let CustomInput = styled.div`
  background-color: transparent;
  color: ${fontColor};
  .inputbox {
    position: relative;
    padding: 10px 0;
  }

  .inputbox input,
  .inputbox textarea,
  .inputbox select {
    width: 100%;
    padding: 10px;
    border: 1px solid grey;
    background-color: ${primaryColor};
    border-radius: 5px;
    outline: none;
    color: ${fontColor};
    font-size: 1em;
    transition: 0.5s;
  }

  .inputbox textarea {
    resize: none;
  }

  .inputbox span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: ${fontColor};
    text-transform: uppercase;
    transition: 0.5s;
  }

  .inputbox .eyeIcon {
    position: absolute;
    right: 7px;
    top: 23px;
    cursor: pointer;
    // color: ${lineColor};
  }

  .inputbox input::placeholder {
    opacity: 0;
  }

  .inputbox input:focus::placeholder {
    opacity: 1;
  }

  .inputbox input:not(:placeholder-shown) ~ span,
  .inputbox input:focus ~ span,
  .inputbox textarea:not(:placeholder-shown) ~ span,
  .inputbox textarea:focus ~ span,
  .inputbox select:not(:placeholder-shown) ~ span,
  .inputbox select:focus ~ span {
    color: ${lineColor};
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background-color: ${primaryColor};
    border-left: 1px solid ${lineColor};
    border-right: 1px solid ${lineColor};
    letter-spacing: 0.2em;
  }

  .inputbox input:not(:placeholder-shown),
  .inputbox input:focus,
  .inputbox textarea:not(:placeholder-shown),
  .inputbox textarea:focus,
  .inputbox select:not(:placeholder-shown),
  .inputbox select:focus {
    border: 1px solid ${lineColor};
  }
`;

const Input = ({
  name,
  title,
  value,
  type,
  width,
  options,
  onValueChange,
  onKeyPress,
  disabled = false,
  placeholder,
  maxValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  function showPasswordFunc() {
    setShowPassword(!showPassword);
  }
  switch (type) {
    case "textarea":
      return (
        <CustomInput>
          <div
            className="inputbox"
            style={{
              width: width ? width : "250px",
            }}
          >
            <textarea
              placeholder={placeholder ? placeholder : " "}
              value={value ? value : ""}
              cols="30"
              rows="10"
              onKeyDown={
                onKeyPress
                  ? (e) => {
                      onKeyPress(e);
                    }
                  : () => {}
              }
              onChange={(v) => {
                onValueChange(v);
              }}
            />
            <span>{title}</span>
          </div>
        </CustomInput>
      );
    case "select":
      return (
        <CustomInput>
          <div
            className="inputbox"
            style={{
              width: width ? width : "250px",
            }}
          >
            <select
              value={value ? value : ""}
              onChange={(v) => {
                onValueChange(v);
              }}
            >
              <option key={0} value="">
                --Select a option
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span>{title}</span>
          </div>
        </CustomInput>
      );
    default:
      return (
        <CustomInput>
          <div
            className="inputbox"
            style={{
              width: width ? width : "250px",
            }}
          >
            <input
              name={name}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder ? placeholder : " "}
              max={maxValue ? maxValue : ""}
              min={0}
              value={value ? value : type === "number" ? 0 : ""}
              onKeyDown={
                onKeyPress
                  ? (e) => {
                      onKeyPress(e);
                    }
                  : () => {}
              }
              onChange={(v) => {
                onValueChange(v);
              }}
              disabled={disabled}
            />
            <span>{title}</span>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eyeIcon"
              onClick={showPasswordFunc}
              style={{
                display: type === "password" ? "block" : "none",
              }}
            />
          </div>
        </CustomInput>
      );
  }
};

export default Input;
