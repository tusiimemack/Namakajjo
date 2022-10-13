import React from "react";
import contacts from "../data/contacts";
import ContactCard from "./cards/ContactCard";

function Contact() {
  return (
    <div id="contact" className="fullwidth-block">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <p className="section-intro">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          laudantium ducimus impedit accusamus labore tempore expedita
          reprehenderit omnis! Consequuntur fugit omnis neque, cum eaque odit?
          Adipisci odit officiis ullam enim!
        </p>

        <div className="contact-detail">
          {contacts.map((card) => {
            return <ContactCard icon={card.icon} detail={card.detail} />;
          })}
        </div>

        <div className="container">
          <form className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="control">
                  <input type="text" placeHolder="Your name..." />
                  <span className="fa fa-user "></span>
                </div>
                <div className="control">
                  <input type="text" placeHolder="Email..." />
                  <span className="fa fa-envelope "></span>
                </div>
                <div className="control">
                  <input type="text" placeHolder="Telephone..." />
                  <span className="fa fa-phone "></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="control">
                  <textarea name="" placeHolder="Your message..."></textarea>
                  <span className="fa fa-pencil "></span>
                </div>
                <p className="text-right">
                  <input type="submit" value="Send message" />
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
