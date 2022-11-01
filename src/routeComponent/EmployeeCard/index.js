//import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

const EmployeeCard = (props) => {
  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(16);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  const { cardDetails } = props;
  const { id, Name, Role, image_url, Projects } = cardDetails;

  return (
    <Link to={`/projects/${id}`} className="nav-link">
      <li className="dev-card-item" style={{ borderTopColor: randomcolors() }}>
        <img src={image_url} alt="imagess" className="image" />
        <div className="emp-card-details">
          <div className="emp-name-card">
            <h1 className="emp-name">Name:- &nbsp; </h1>
            <h1 className="emp-name">{Name}</h1>
          </div>
          <div className="emp-role-card">
            <h1 className="emp-role">Role:- &nbsp; </h1>
            <h1 className="emp-role">{Role}</h1>
          </div>
          <div className="pro_card">
            <h2 className="discription">Project-Name :- &nbsp;</h2>

            <p>
              {Projects.map((each) => (
                <h6>{each.Name}</h6>
              ))}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default EmployeeCard;
