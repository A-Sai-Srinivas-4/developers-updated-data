import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProjectData from "../ProjectData";
import Sidebar from "../Sidebar/Sidebar";
import "./index.css";

const Projects = () => (
  <>
    <div>
      <Sidebar />
      <div className="project-details-back-container">
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
