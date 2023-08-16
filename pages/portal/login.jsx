import styled from "styled-components";
import { CusButton, Input } from "../../components";
import { useState } from "react";
import { fontColor, primaryColor } from "../../libs/color";
import Image from "next/image";

const LoginComp = styled.div`
  .loginComp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
    color: ${fontColor};
    height: 100vh;
  }
  .logoPortal {
    border-radius: 50%;
  }
  .errorMessage {
    color: red;
    text-align: center;
    font-weight: 700;
  }
`;

const Login = ({ loginFunc, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <LoginComp>
        <div className="loginComp">
          <Image
            alt="loginLogo"
            className="logoPortal"
            width={200}
            height={200}
            src={"/webContent/loginLogo.png"}
          />
          <Input
            name={"Username"}
            title={"Username"}
            value={username}
            type={"text"}
            width="auto"
            onKeyPress={(e) => {
              if (e.key.toUpperCase() === "ENTER") {
                loginFunc(username, password);
              }
            }}
            onValueChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Input>
          <Input
            name={"Password"}
            title={"Password"}
            value={password}
            type={"password"}
            width="auto"
            onKeyPress={(e) => {
              if (e.key.toUpperCase() === "ENTER") {
                loginFunc(username, password);
              }
            }}
            onValueChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          {loginError ? (
            <span className="errorMessage">
              Username or Password is incorrect.
            </span>
          ) : (
            <></>
          )}
          <CusButton
            id="loginBtn"
            title={"Login"}
            clicked={() => {
              loginFunc(username, password);
            }}
          />
        </div>
      </LoginComp>
    </div>
  );
};

export default Login;
