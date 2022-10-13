import React from "react";
import event from "../data/event";
import EventCard from "./cards/EventCard";

function Events() {
  return (
    <div id="events" className="fullwidth-block">
      <div className="container">
        <h2 className="section-title">Upcoming events</h2>
        <div className="row">
          {event.map((card) => {
            return (
              <div className="col-md-3 col-sm-6">
                <EventCard
                  img={card.img}
                  title={card.title}
                  eDate={card.eDate}
                  location={card.location}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
