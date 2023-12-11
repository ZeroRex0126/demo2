import styled from "styled-components";
import CusButton from "../cusButton/cusButton";
import Image from "next/image";
import { primaryColor } from "../../libs/color";

const Comp = styled.div`
  min-height: 100vh;
  background-color: ${primaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  text-align: center;
  h1 {
    font-family: "Script";
    font-size: 6rem;
  }

  .details-container {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .details-img {
    max-height: 100vh;
  }

  @media (max-width: 714px) {
    .details-img {
      max-height: 50vh;
    }
  }
`;

const Details = ({ webSiteSetting }) => {
  return (
    <Comp>
      <div className="details-container">
        <h1 className="mainTitle">Details</h1>
        <h2>The Ceremoney & Reception</h2>
        <h5>5:00 pm (Reception to Follow)</h5>
        <span>
          Grace Falls Wedding & Function Venue,
          <br /> Plot 357, Derdepoort, Pretoria, Gauteng, 0035
        </span>
        <br />
        <CusButton title={"GET DIRECTIOnS"} />
      </div>
      <div
        className="details-img"
        style={{ backgroundImage: "/webContent/details.jpg" }}
      >
        <Image
          src={"/webContent/details.jpg"}
          width={1500}
          height={1500}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Comp>
  );
};

export default Details;
