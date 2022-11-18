import React, { useState } from "react";
import PopupWindow from "../PopupWindow";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./index.css";

const EmployeeCard = (props) => {
  const [addModalShow, setModalShow] = useState(false);
  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(16);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  let addModalClose = () => setModalShow(false);

  const { cardDetails } = props;
  const { ID, Name,Image_url,Role, Details } = cardDetails;
  const {Advance} = Details;
  const {Projects} = Advance;
  // const { id, Name, Role, image_url, Projects } = cardDetails;
  //console.log(Projects)

  return (
    <>
      <ButtonToolbar>
        <Button variant="black" onClick={() => setModalShow(true)}>
          <li
            className="dev-card-item"
            style={{ borderTopColor: randomcolors() }}
          >
            <img src={Image_url} alt="imagess" className="dev-image" />
            <div className="emp-card-details">
              <div className="emp-name-card">
                <h1 className="emp-heading">Name:-&nbsp;</h1>
                <h1 className="emp-description">{Name}</h1>
              </div>
              <div className="emp-role-card">
                <h1 className="emp-heading">Role:-</h1>
                <h1 className="emp-description">{Role}</h1>
              </div>
              <div className="project_names_card">
                <h2 className="emp-heading">Project-Name:-&nbsp; </h2>

                <p className="projects">
                  {Projects.length > 0 ? Projects.map((each) => (
                    <h6 className="emp-description">{each.Project}</h6>
                  )) : <h6 className="emp-description">NA</h6>}
                </p>
                <br />
              </div>
            </div>
          </li>
        </Button>
        <PopupWindow
          key={ID}
          show={addModalShow}
          onHide={addModalClose}
          carddetails={cardDetails}
        />
      </ButtonToolbar>
    </>
  );
};

export default EmployeeCard;
