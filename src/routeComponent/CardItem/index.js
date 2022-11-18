import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CardItem = ({ details }) => {
  const { ID, Name, Scrum_Master,Current_Sprint} = details;

  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(13);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  return (
    <>
      <Link
        to={`/project_details/${Name}`}
        style={{ borderTopColor: randomcolors() }}
        className="card-link"
      >
        <div key={ID} className="project-card">
          <h3 className="heading-text">{Name}</h3>
          <p className="">Scrum Master : {Scrum_Master}</p>
          <p className="">Current Sprint : {Current_Sprint}</p>
        </div>
      </Link>
    </>
  );
};

export default CardItem;
