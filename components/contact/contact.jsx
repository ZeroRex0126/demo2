import styled from "styled-components";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Fade } from "react-awesome-reveal";
import { fontColor, lineColor, primaryColor } from "../../libs/color";

const ContactComp = styled.div`
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${lineColor};
  color: ${primaryColor};

  .divider {
    border-left: solid;
    margin: 5px;
  }

  .socialBtn {
    background: ${lineColor};
    color: ${fontColor};
    border: ${fontColor} solid 2px;
    margin: 5px;
  }

  .socialBtn:hover {
    background: ${fontColor};
    color: ${lineColor};
    border: ${fontColor} solid 2px;
    margin: 5px;
  }

  .section-title::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    right: calc(50% - 80px);
    background: ${fontColor};
  }

  .section-title::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    left: calc(50% - 80px);
    background: ${fontColor};
  }
`;

const Contact = () => {
  return (
    <ContactComp id="contact">
      <div className="container-fluid  py-5" id="contact">
        <div className="container text-center py-5">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <div className="section-title position-relative text-center">
              <h1 className="font-secondary display-3 ">Thank You</h1>
              <i>♥</i>
            </div>
            <div className="d-flex justify-content-center mb-4">
              {/* <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
              <a
                className="socialBtn btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="https://www.facebook.com/profile.php?id=100094604778325"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              {/* <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a> */}
              <a
                className="socialBtn btn btn-lg btn-outline-light btn-lg-square"
                href="https://www.instagram.com/te_theenvelope/"
                target="_blank"
              >
                <BsInstagram />
              </a>
            </div>
            <p>
              Interested in having a site like this for your event? Contact us.
            </p>
            <div className="d-flex justify-content-center py-2">
              <a
                className="socialBtn btn btn-lg btn-outline-light btn-lg-square"
                href="mailto: te.theenvelope@gmail.com"
              >
                <GoMail />
              </a>
              <span className=" divider"></span>
              <a
                className="socialBtn btn btn-lg btn-outline-light btn-lg-square"
                href="https://api.whatsapp.com/send?phone=27823233880&text=Hello%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20a%20RSVP%2Fany%20website%F0%9F%98%84"
                target="_blank"
              >
                <BsWhatsapp />
              </a>
            </div>
            <p className="m-0">
              {/* &copy; <a className="text-primary">Domain Name</a>. Designed by{" "} */}
              &copy; Designed by{" "}
              <a
                className="text-primary"
                href="https://www.instagram.com/te_theenvelope/"
                target="_blank"
              >
                The Envelope
              </a>
            </p>
          </Fade>
        </div>
      </div>
    </ContactComp>
  );
};

export default Contact;
