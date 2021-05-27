import React from "react";
import "./minue-card.scss";
import { withRouter } from "react-router-dom";

const MinueCard = ({
  title,
  imageUrl,
  width,
  history,
  height,
  linkUrl,
  match,
}) => (
  <div className={`col-${width} g-3`}>
    <div
      className="menu-item d-flex text-center  justify-content-center align-items-center"
      style={{
        height: height,
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  </div>
);

export default withRouter(MinueCard);
