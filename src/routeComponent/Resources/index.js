//import Header from '../Header'
import DeveloperData from "./../DeveloperData";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
//import EmployeeCard from './../EmployeeCard'

import "./index.css";

const Resources = () => (
  <>
    <div>
      <div className="back-container">
        <Link to="/" className="back-option">
          <MdOutlineArrowBackIosNew size={25} />
        </Link>
      </div>
      <h1 className="dev-details-heading">Developer-Details</h1>
      <DeveloperData />
    </div>
  </>
);

export default Resources;
