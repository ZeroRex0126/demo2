import Head from "next/head";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { fontColor, primaryColor } from "../../libs/color";
import Image from "next/image";
import { lineColor } from "../../libs/color";

const About = styled.div`
  overflow: hidden;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: ${fontColor};

  .container {
    .aboutPic {
      border-radius: 50%;
      height: 20rem;
      width: 20rem;
      background-size: cover;
    }
    .font-secondary {
      color: ${lineColor};
    }

    .row {
      .position-relative {
        display: block;
      }
      div {
        // height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 0;
        padding-left: 0;

        .btn-square {
          width: 40px;
          height: 40px;
        }

        .btn-sm-square {
          width: 32px;
          height: 32px;
        }

        .btn-lg-square {
          width: 50px;
          height: 50px;
        }

        .btn-square,
        .btn-sm-square,
        .btn-lg-square {
          margin-left: 5px;
          margin-right: 5px;
          text-align: center;
        }
      }
    }
  }
`;

const AboutComponent = ({ webSiteSetting }) => {
  return (
    <About id="aboutContainer">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-4">Groom & Bride</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row m-0">
          <div className="col-md-6 p-4">
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <Image
                width={300}
                height={250}
                className="aboutPic"
                src={`/webContent/groom.jpg`}
              />
              <div className="text-center">
                <div className="h-100 d-flex flex-column justify-content-cente p-5 groom">
                  <h3 className="mb-3">The Groom</h3>
                  <p>{webSiteSetting.groom.description}</p>
                  <h3 className="font-secondary font-weight-normal mb-3">
                    <i className="fa fa-male text-primary pr-3"></i>
                    {webSiteSetting.groom.name}
                  </h3>
                  {/* <div className="position-relative">
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <BsInstagram />
                    </a>
                  </div> */}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-6 p-4">
            <Fade direction="right" duration={2000} triggerOnce={true}>
              <Image
                width={300}
                height={250}
                className="aboutPic"
                src={`/webContent/bride.jpg`}
              />
              <div className="text-center">
                <div className="h-100 d-flex flex-column justify-content-cente p-5 bride">
                  <h3 className="mb-3">The Bride</h3>
                  <p>{webSiteSetting.bride.description}</p>
                  <h3 className="font-secondary font-weight-normal mb-3">
                    <i className="fa fa-female text-primary pr-3"></i>
                    {webSiteSetting.bride.name}
                  </h3>
                  {/* <div className="position-relative">
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-1"
                      href="#"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <BsInstagram />
                    </a>
                  </div> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </About>
  );
};

export default AboutComponent;
