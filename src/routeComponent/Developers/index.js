import DeveloperData from "../DeveloperData";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./index.css";
//import GetSidebar from "../Sidebar/Sidebar";
import Header from "../Header";

const Developers = () => (
  <>
    <Header />
    <div className="sidebar-developers-container">
      

      <div className="dev-display-details-container">
        <h1 className="project-heading">Developer-Details</h1>
        <DeveloperData />
      </div>
    </div>
  </>
);

export default Developers;
