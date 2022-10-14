import React from "react";
import Attendance from "./Attendance";
import "./dash.css";
import Register from "./Register";

function Dashboard() {
  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col-md-2 left">
          <ul>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Attendance</a>
            </li>
          </ul>
        </div>
        <div className="col-md-10 right">
          {/* <Register /> */}
          <Attendance />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
