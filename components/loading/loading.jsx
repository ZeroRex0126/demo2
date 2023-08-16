import styled from "styled-components";
import { lineColor, primaryColor } from "../../libs/color";

let LoadingComp = styled.div`
  background-color: ${primaryColor};
  .sec-loading {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sec-loading .one {
    height: 80px;
    width: 80px;
    border: 7px solid ${lineColor};
    transform: rotate(45deg);
    border-radius: 0 50% 50% 50%;
    position: relative;
    animation: move 0.5s linear infinite alternate-reverse;
  }
  .sec-loading .one::before {
    content: "";
    position: absolute;
    height: 55%;
    width: 55%;
    border-radius: 50%;
    border: 7px solid transparent;
    border-top-color: ${lineColor};
    border-bottom-color: ${lineColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes move {
    to {
      transform: translateY(15px) rotate(45deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingComp>
      <div className="sec-loading">
        <div className="one"></div>
      </div>
    </LoadingComp>
  );
};

export default Loading;
