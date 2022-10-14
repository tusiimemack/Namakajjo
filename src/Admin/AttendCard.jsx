import React from "react";

function AttendCard(props) {
  return (
    <tr>
      <td>
        <input type="date" name="" id="" required />
      </td>
      <td>{props.name}</td>
      <td>{props.contact}</td>
      <td>{props.residence}</td>
      <td>{props.email}</td>
      <td>
        <input type="checkbox" name="" id="" required />
      </td>
    </tr>
  );
}

export default AttendCard;
