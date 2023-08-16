import styled from "styled-components";
const InfomationCard = styled.div`
  .infoCard {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
    border: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    .count {
      font-size: 35px;
      font-weight: 600;
    }
  }
`;
const InfoCard = ({ title, count }) => {
  return (
    <InfomationCard>
      <div className="infoCard">
        <div className="card-block">
          {/* <h6 className="">Orders Received</h6> */}
          <span className="count">{count}</span>
          <p className="">{title}</p>
        </div>
      </div>
    </InfomationCard>
  );
};

export default InfoCard;
