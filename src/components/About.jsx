import React from "react";
import pastors from "../data/pastors";
import PastorCard from "./cards/PastorCard";

function About() {
  return (
    <div className="about">
      <div id="pastors" class="fullwidth-block" data-bg-color="#4a3173">
        <div className="aboutIntro">
          <h1 className="about-title text-center">About Us</h1>
          <div className="about-border">
            <span>
              <hr />
            </span>
            <span className="fa fa-2x fa-heart"></span>
            <span>
              <hr />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            maiores, vel quos nemo eum optio quisquam nulla ab corrupti.
            Molestias blanditiis iusto exercitationem quae praesentium
            consectetur eaque in amet ipsa.
          </p>
        </div>
        <div className="container">
          <h2 className="section-title">Meet our pastors</h2>
          <p className="section-intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dolorum accusantium in. Consequatur, optio. Dolore debitis velit
            corporis. Nostrum, facilis magni recusandae quaerat doloremque
            perferendis nulla ducimus ad labore cumque.
          </p>

          <div className="row">
            {pastors.map((card) => {
              return (
                <PastorCard
                  img={card.img}
                  pastorName={card.pastorName}
                  pastorDate={card.pastorDate}
                />
              );
            })}
          </div>
          <center className="text-center">
            <a href="#" className="button">
              View all our pastors
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default About;
