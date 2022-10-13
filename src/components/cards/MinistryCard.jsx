import React from "react";

function MinistryCard(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="feature">
        <div className="feature-icon">
          <img src={props.img} alt="" className="icon" />
        </div>
        <h2 className="feature-title">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default MinistryCard;
