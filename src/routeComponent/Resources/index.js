//import Header from '../Header'
import DeveloperData from "./../DeveloperData";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
//import EmployeeCard from './../EmployeeCard'

import "./index.css";

const Resources = () => (
  <>
    <div>
    <div className="pro-details-back-container">
        <div className="back-container">
          <Link to="/" className="back-option">
            <MdOutlineArrowBackIosNew size={25} />
          </Link>
        </div>
        <div className="pro-heading-container">
          <h1 className="project-heading">Developer-Details</h1>
        </div>
      </div>
      <DeveloperData />
    </div>
      
  </>
);

export default Resources;
