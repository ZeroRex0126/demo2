import styled from "styled-components";
import { fontColor, lineColor, primaryColor } from "../../../../libs/color";

const CommentCardComp = styled.div`
  max-width: 400px;
  a {
    text-decoration: none;
  }
  .ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);

    margin: 0 15px 30px;

    overflow: hidden;
    border: solid ${fontColor} 3px;
    border-radius: 28px;
  }
  .ag-courses-item_link {
    display: block;
    padding: 30px 20px;
    background-color: ${primaryColor};
    color: ${fontColor};

    overflow: hidden;

    position: relative;
  }
  .ag-courses-item_link:hover,
  .ag-courses-item_link:hover .ag-courses-item_date,
  .ag-courses-item_link:hover .ag-courses-item_title,
  .ag-courses-item_link:hover .ag-courses-item_date-box {
    text-decoration: none;
    color: ${primaryColor};
  }
  .ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
  }
  .ag-courses-item_title {
    text-decoration: none !important;
    min-height: 87px;
    margin: 0 0 25px;

    overflow: hidden;

    font-weight: bold;
    font-size: 30px;
    color: ${fontColor};

    z-index: 2;
    position: relative;
  }
  .ag-courses-item_date-box {
    font-size: 18px;
    color: ${fontColor};

    z-index: 2;
    position: relative;
  }
  .ag-courses-item_date {
    font-weight: bold;
    color: ${fontColor};

    -webkit-transition: color 0.5s ease;
    -o-transition: color 0.5s ease;
    transition: color 0.5s ease;
  }
  .ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: ${lineColor};

    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;

    border-radius: 50%;

    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  @media (min-width: 979px) {
    .ag-courses_item {
      -ms-flex-preferred-size: calc(50% - 30px);
      flex-basis: calc(50% - 30px);
    }
    .ag-courses-item_title {
      font-size: 24px;
    }
  }

  @media (min-width: 639px) {
    .ag-courses_item {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
    }
    .ag-courses-item_title {
      min-height: 72px;

      font-size: 24px;
    }
    .ag-courses-item_link {
      padding: 22px 40px;
    }
    .ag-courses-item_date-box {
      font-size: 16px;
    }
  }
`;

const CommentCard = ({ name, surname, comment }) => {
  return (
    <CommentCardComp>
      <div className="ag-courses_item">
        <a className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>

          <div className="ag-courses-item_title">
            {comment ? comment : "No Comment :("}
          </div>

          <div className="ag-courses-item_date-box">
            From: {name}
            <span className="ag-courses-item_date"> {surname}</span>
          </div>
        </a>
      </div>
    </CommentCardComp>
  );
};

export default CommentCard;
