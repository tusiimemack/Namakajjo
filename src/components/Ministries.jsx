import React from "react";
import ministry from "../data/ministry";
import MinistryCard from "./cards/MinistryCard";

function Ministries() {
  return (
    <main className="main-content">
      <div id="about" className="fullwidth-block">
        <div className="container">
          <div className="row">
            {ministry.map((card) => {
              return (
                <MinistryCard
                  // img={card.img}
                  title={card.title}
                  content={card.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ministries;
