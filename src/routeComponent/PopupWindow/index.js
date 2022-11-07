import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Data from "./../OldJson/jsonData.json";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./index.css";

const PopupWindow = (props) => {
  //console.log(props.cardDetails);
  const data = props.carddetails;
  console.log(data);
  const name = data.Name;
  console.log(name);
  const projectData = data.Projects;
  console.log(projectData);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autoFocus="true"
      className="transition"
      backdrop="false"
      contentClassName="body-color"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Developer Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-color">
        <>
          <div className="details_container">
            <div className="top_details">
              <img src={data.image_url} alt="" className="images" />
              <div className="cards">
                <h6 className="pop-headings">
                  NAME :-<span className="spans">{data.Name}</span>
                </h6>
                <h1 className="pop-headings">
                  ROLE :-<span className="spans">{data.Role}</span>
                </h1>
                <h1 className="pop-headings">
                  EXPERIENCE :- <span className="spans">{data.Experience}</span>
                </h1>
              </div>
            </div>
            <div className="projects-list">
              {projectData.map((eachItems) => {
                return (
                  <div className="pop-project_container">
                    <h1 className="pop-headings">
                      PROJECTS :
                      <span className="spans">{`${eachItems.Name}`}</span>
                    </h1>
                    <h1 className="pop-headings">
                      Role :{" "}
                      <span className="spans">{`${eachItems.Role}`}</span>
                    </h1>
                    <h1 className="pop-headings">
                      Tech_Stack :
                      <span className="spans">{`${eachItems.Tech_Stack}`}</span>
                    </h1>
                    <h1 className="pop-headings">
                      Allocation :
                      <span className="spans">{`${eachItems.Allocation}`}</span>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer className="close-btn">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupWindow;
