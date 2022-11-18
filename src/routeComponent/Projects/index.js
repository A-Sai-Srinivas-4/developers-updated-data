import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProjectData from "../ProjectData";
import SwipeBar from "../SwipeBar";
import Sidebar from "../Sidebar/Sidebar";
import "./index.css";

const Projects = () => (
  <>
    <div>
    
      <div className="project-details-back-container">
      <SwipeBar/>
        <div className="back-container">
          <Link to="/" className="back-option">
            <MdOutlineArrowBackIosNew size={25} />
          </Link>
        </div>
        <div className="project-heading-container">
          <h1 className="project-heading">Projects</h1>
        </div>
      </div>
      <div className="projects-container">
        <ProjectData />
      </div>
    </div>
  </>
);

export default Projects;
