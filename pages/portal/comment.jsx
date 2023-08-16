import styled from "styled-components";
import CommentCard from "./portalComp/commentCard/commentCard";

const CommentComp = styled.div`
  .heading {
    width: 100%;
    padding: 25px;
  }
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

    .commentGrid {
      column-count: 3;
      column-gap: 1em;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1128px) {
    .commentGrid {
      column-count: 2;
    }
  }

  @media (max-width: 875px) {
    .commentGrid {
      column-count: 1;
    }
  }
  }
`;

const Comment = ({ reservation }) => {
  return (
    <CommentComp>
      <h1 className="heading">Let's see what people say</h1>
      <div className="commentGrid">
        {reservation.map((resv, index) => {
          return (
            <CommentCard
              key={index}
              name={resv.name}
              surname={resv.surname}
              comment={resv.comment}
            />
          );
        })}
      </div>
    </CommentComp>
  );
};

export default Comment;
