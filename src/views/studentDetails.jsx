import React, { Component } from "react";
import Student from "../components/student";
import "./studentDetails.css";

class StudentDetails extends Component {
  render() {
    return (
      <div className="card__studentDetails">
        <Student />
      </div>
    );
  }
}

export default StudentDetails;
