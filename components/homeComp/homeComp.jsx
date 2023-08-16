import { Fade } from "react-awesome-reveal";
import { monthsLargeName } from "../../arrays/arrays";
import { fontColor, primaryColor } from "../../libs/color";
import TimerCard from "../timerCard/timerCard";

import styled from "styled-components";
import Image from "next/image";
import CusButton from "../cusButton/cusButton";

const HomeCom = styled.div`
  .mainTitle {
    font-family: "Script";
    font-size: 50px;
  }
  .main {
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${primaryColor};
    color: ${fontColor};
    .homeContent {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        letter-spacing: 10px;
      }
    }

    .timer {
      max-width: 100vw;
      display: flex;
    }

    .home-rsvp-con {
      width: 100px;
    }

    // .cusButton {
    //   width: 100px;
    // }

    @media (min-width: 768px) {
      .mainTitle {
        font-size: 70px;
      }
    }
  }
`;
const HomeComp = ({ webSiteSetting, remainingTime, showRSVPModal }) => {
  const date = new Date(
    webSiteSetting.year,
    webSiteSetting.month,
    webSiteSetting.day
  );
  return (
    <HomeCom>
      <div
        className="main"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
        }}
        id="home"
      >
        <div className="homeContent">
          <h1 className="mainTitle">{webSiteSetting.title}</h1>
          <h2>
            {`${monthsLargeName[
              date.getMonth()
            ].toUpperCase()} ${date.getDate()} . ${date.getFullYear()}`}
          </h2>
          <CusButton title={"R S V P"} clicked={showRSVPModal} />
        </div>
        <div className="homeContent"></div>
      </div>

      {/* <Fade
        className="btRight coner-decor"
        direction="right"
        duration={2000}
        triggerOnce={true}
      >
        <Image width={350} height={350} src={"/webContent/bottomRight.png"} />
      </Fade>

      <Fade
        className="tpLeft coner-decor"
        direction="left"
        duration={2000}
        triggerOnce={true}
      >
        <Image width={350} height={350} src={"/webContent/topLeft.png"} />
      </Fade> */}
    </HomeCom>
  );
};

export default HomeComp;
