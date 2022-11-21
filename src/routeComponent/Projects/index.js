import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProjectData from "../ProjectData";
//import SwipeBar from "../SwipeBar";
import GetSidebar from "../Sidebar/Sidebar";


import Header from "../Header";
import "./index.css";



const Projects = () => {
  useEffect = (() => {}, GetSidebar);
  return (
    <>
      <Header />

      <div className="sidebar-projects-container">
        {GetSidebar()}
        <div className="projects-container">
          <div className="project-details-back-container">
            
            <div className="project-heading-container">
              <h1 className="project-heading">Projects</h1>
            </div>
          </div>
          <ProjectData />
        </div>
      </div>
    </>
  );
};

export default Projects;
