import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { fontColor, lineColor, primaryColor } from "../../libs/color";
import Image from "next/image";

const EventsComp = styled.div`
  overflow: hidden;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: ${fontColor};

  .eventCard {
    padding: 20px;
  }

  .pic {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    height: 250px;
    width: 300px;
    background-size: cover;
  }

  .section-title::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    right: calc(50% - 80px);
    background: ${lineColor};
  }

  .section-title::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    left: calc(50% - 80px);
    background: ${lineColor};
  }
  .font-weight-normal {
    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .border-right {
      border-right: 2px solid ${lineColor} !important;
    }
  }
`;

const Events = ({ webSiteSetting }) => {
  return (
    <EventsComp id="events">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h1 className="text-uppercase mb-3">Event</h1>
          <h1 className="font-secondary display-4">Our Wedding Event</h1>
          <i>♥</i>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h5 className="font-weight-normal text-muted mb-3 pb-3">
              {webSiteSetting.eventDetails.description}
            </h5>
          </div>
        </div>
        <div className="row">
          {webSiteSetting.eventDetails.events.map((v, i) => {
            return (
              <div
                className={`${
                  i !== webSiteSetting.eventDetails.events.length - 1
                    ? `col-md-6 ${
                        i % 2 === 0 ? "border-right border-primary" : ""
                      }`
                    : "col-md-12"
                }`}
                key={i}
              >
                <Fade direction="up" duration={2000} triggerOnce={true}>
                  <div className="eventCard text-center text-md-right mr-md-3 mb-4 mb-md-0">
                    <div
                      className="col-md-6 p-0 pic"
                      style={{
                        backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                      }}
                    >
                      <Image width={300} height={250} src={v.imageName} />
                    </div>
                    <h2 className="mb-3">{v.title}</h2>
                    <p className="mb-2">{v.place}</p>
                    <p className="mb-0">{v.time}</p>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </EventsComp>
  );
};

export default Events;
