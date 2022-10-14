import React from "react";
import AttendCard from "./AttendCard";
import members from "./data/members";

function Attendance() {
  return (
    <aside className="attendance">
      <h1>Attendance</h1>
      <form className="contact-form">
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Residence</th>
            <th>Email</th>
            <th>Present</th>
          </tr>
          {members.map((card) => {
            return (
              <AttendCard
                name={card.name}
                contact={card.contact}
                residence={card.residence}
                email={card.email}
              />
            );
          })}
        </table>
        <p className="text-right">
          <input type="submit" value="Submit" />
        </p>
      </form>
    </aside>
  );
}

export default Attendance;
