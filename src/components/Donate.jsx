import React from "react";
import donations from "../data/donations";
import DonateCard from "./cards/DonateCard";

function Donate() {
  return (
    <div className="donate">
      <div className="container">
        <form className="contact-form">
          <div className="row">
            {donations.map((card) => {
              return (
                <DonateCard
                  type={card.type}
                  text={card.text}
                  icon={card.icon}
                />
              );
            })}
            <p className="text-right">
              <input type="submit" value="Donate" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donate;
