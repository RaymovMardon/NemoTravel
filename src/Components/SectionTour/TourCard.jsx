import React from "react";

const TourCard = ({ img, ttitle, p, btn }) => {
  return (
    <>
      <div className="torcard">
        <img src={img} alt="" />

        <div>
          <h3>{ttitle}</h3>
          <p>{p}</p>
          <a className="btnn" href="#form-one">
            {btn}
          </a>
        </div>
      </div>
    </>
  );
};

export default TourCard;
