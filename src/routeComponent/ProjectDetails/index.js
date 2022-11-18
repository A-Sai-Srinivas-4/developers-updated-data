import { useParams } from "react-router-dom";
import Data from "../Json/data.json";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
//import Sidebar from "../Sidebar/Sidebar";
import SwipeBar from "../SwipeBar";
import "./index.css";

const ProjectDetails = ({ match }) => {
  const { projectname } = useParams();

  const myObj = {
    Emp_Details: {
      Name: [],
      Role: [],
      Team: [],
    },
    Teams: {
      Dev_Team: [],
      QA_Team: [],
    },
    Scrum_Master: [],
    Current_Sprint: [],
  };

  const fetchProjectData = () => {
    Data.Resources.Project_Details.map(
      (each) =>
        each.Name === projectname &&
        myObj.Teams.Dev_Team.push(each.Details.Advance.Development_Team) &&
        myObj.Teams.QA_Team.push(each.Details.Advance.QA_Team) &&
        myObj.Scrum_Master.push(each.Scrum_Master) &&
        myObj.Current_Sprint.push(each.Current_Sprint)
    );

    return myObj;
  };

  const projDetails = fetchProjectData();
  //console.log(projDetails)

  const fetchEmpData = () => {
    Data.Resources.Empolyee_Details.map((each) =>
      each.Details.Advance.Projects.map(
        (e) =>
          e.Project === projectname &&
          myObj.Emp_Details.Name.push(each.Name) &&
          myObj.Emp_Details.Role.push(each.Role) &&
          myObj.Emp_Details.Team.push(each.Team)
      )
    );

    return myObj;
  };
  const Details = fetchEmpData();
  console.log(Details);

  var data = [];

  Details.Emp_Details.Role.forEach(
    (Role, i) =>
      (data = [
        ...data,
        {
          Name: Details.Emp_Details.Name[i],
          Role: Role,
          Team: Details.Emp_Details.Team[i],
        },
      ])
  );

  console.log(data);

  const getDeptOrder = (e) => <h1 className="emp-name">{e.Name}</h1>;

  return (
    <>
    
      <div className="project-details-card ">
        <div className="project-details-back-container">
          <div className="back-container">
            <Link to="/projects" className="back-option">
              <MdOutlineArrowBackIosNew size={25} />
            </Link>
          </div>
          <div className="project-heading-container">
            <h1 className="project-heading">
              Project Name :<span className="heading-text">{projectname}</span>
            </h1>
          </div>
        </div>

        <div className="emp-details-container">
          <div className="emp-card">
            <h1 className="team-heading">Scrum Master :</h1>
            {data.map((e) => {
              return <>{e.Role === "Scrum Master" && getDeptOrder(e)}</>;
            })}
          </div>

          <div className="emp-card">
            <h1 className="team-heading">Development Team :</h1>
            <div className="emp-name-card">
              {data.map((e) => {
                return (
                  <>{e.Team === "Full-Stack Developer" && getDeptOrder(e)}</>
                );
              })}
            </div>
          </div>
          <div className="emp-card">
            <h1 className="team-heading">QA Team :</h1>
            <div className="emp-name-card">
              {data.map((e) => {
                return <>{e.Team === "QA" && getDeptOrder(e)}</>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
