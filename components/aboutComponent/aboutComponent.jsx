import Head from "next/head";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { fontColor, primaryColor } from "../../libs/color";
import Image from "next/image";
import { lineColor } from "../../libs/color";
import CusButton from "../cusButton/cusButton";

const About = styled.div`
  min-height: 100vh;
  background-color: ${primaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  text-align: center;
  h1 {
    font-family: "Script";
    font-size: 6rem;
  }

  .about-container {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about-img {
    max-height: 100vh;
  }

  @media (max-width: 714px) {
    h1 {
      font-size: 3rem;
    }

    .about-img {
      max-height: 50vh;
    }
  }
`;

const AboutComponent = ({ webSiteSetting }) => {
  return (
    <About id="aboutContainer">
      <div
        className="about-img"
        style={{ backgroundImage: "/webContent/details.jpg" }}
      >
        <Image
          src={"/webContent/details.jpg"}
          width={1500}
          height={1500}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="about-container">
        <h1 className="mainTitle">Groom and Bride</h1>
        <div className="text-center">
          <div className="h-100 d-flex flex-column justify-content-cente p-5 bride">
            <p>{webSiteSetting.bride.description}</p>
            <h3 className="font-secondary font-weight-normal mb-3">
              <i className="fa fa-female text-primary pr-3"></i>
              {webSiteSetting.bride.name}
            </h3>
          </div>
        </div>
      </div>
    </About>
  );
};

export default AboutComponent;
