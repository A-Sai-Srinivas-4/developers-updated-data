import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Data from "./../OldJson/jsonData.json";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./index.css"

const PopupWindow = (props) => {
  //console.log(props.cardDetails);
  const data = props.carddetails;
  console.log(data)
  const name = data.Name
  console.log(name)
  const projectData = data.Projects
  console.log(projectData)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Developer Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="details_container">
            <div className="back-container">
              <Link to="/resources" className="back-option">
                <MdOutlineArrowBackIosNew size={25} />
              </Link>
            </div>
            <div className="top_details">
              <img src={data.image_url} alt="" className="images" />
              <div className="cards">
                <h1 className="headings">
                  NAME :- &nbsp; {data.Name}
                </h1>
                <h1 className="headings">
                  ROLE :- &nbsp;{data.Role}
                </h1>
                <h1 className="headings">
                  EXPERIENCE :- &nbsp;{data.Experience}
                </h1>
              </div>
            </div>
            <div className="projects-list">
            {projectData.map((eachItems) => {
              return (
                <div className="project_container">
                  <h1 className="headings">
                    PROJECTS : &nbsp;
                    {`${eachItems.Name}`}
                  </h1>
                  <h1 className="headings">
                    Role : &nbsp; {`${eachItems.Role}`}
                  </h1>
                  <h1 className="headings">
                    Tech_Stack : &nbsp;
                    {`${eachItems.Tech_Stack}`}
                  </h1>
                  <h1 className="headings">
                    Allocation : &nbsp;
                    {`${eachItems.Allocation}`}
                  </h1>

                  <hr />
                </div>
              );
            })}
            </div>

            
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupWindow;

// <div className="top_details">
// <img src={data.image_url} alt="" className="images"/>
// <div className="cards">
// <h1 className="headings">NAME  :-  <span className="spans">{data.Name}</span></h1>
// <h1 className="headings">ROLE  :-  <span className="spans">{data.Role}</span></h1>
// <h1 className="headings">EXPERIENCE  :-  <span className="spans">{data.Experience}</span></h1>
// </div>
// </div>

// {
//     projectData.map(eachItems=>{
//       return (
//         <div className="project_container">
//         <h1 className="headings" >PROJECTS : <span className="spans">{`${eachItems.Name}`}</span></h1>
//         <h1 className="headings" >Role : <span className="spans">{`${eachItems.Role}`}</span></h1>
//         <h1 className="headings" >Tech_Stack : <span className="spans">{`${eachItems.Tech_Stack}`}</span></h1>
//         <h1 className="headings" >Allocation : <span className="spans">{`${eachItems.Allocation}`}</span></h1>

//         <hr />
//         </div>

//       )
//     })
//   }
