//import ProjectData from "../ProjectData"
import { useParams } from "react-router-dom";
import OldJson from "./../OldJson/jsonData.json";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./index.css";
import Sidebar from "../Sidebar/Sidebar";

const ProjectDetails = ({ match }) => {
  const { projectname } = useParams();

  //const projectDetailsArray = projectdetails.split(",")

  //console.log( projectname)
  const myArray = [];

  const fetchData = () => {
    const dataObj = OldJson.map((each) =>
      each.Projects.map(
        (e) =>
          e.Name === projectname &&
          myArray.push(each.Name) &&
          myArray.push(each.Role)
      )
    );
    return myArray;
  };

  const projDetails = fetchData();
  //console.log(details)
  //console.log(projDetails)

  const Name = [];
  const Role = [];
  const details = {};
  //console.log(Name);
  //console.log(Role);

  for (var i = 0; i < projDetails.length; i++) {
    if (i % 2 === 0) {
      // index is even
      Name.push(projDetails[i]);
      details.Name = Name;
    } else {
      Role.push(projDetails[i]);
      details.Role = Role;
    }
  }
  //  console.log(Name)
  // console.log(Role)

  console.log(details);
  var data = [];

  Role.forEach((Role, i) => (data = [...data, { Name: Name[i], Role: Role }]));

  console.log(data);

  const randomcolors = () => {
    return "#" + Math.floor(Math.random() * 26743815).toString(16);
    //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
  };

  //<p ><span >{e.Name}</span> - <span className="text-color">{e.Role}</span></p>

  return (
    <>
      <div className="project-details-card ">
        <Sidebar />
        <div className="pro-details-back-container">
          <div className="back-container">
            <Link to="/projects" className="back-option">
              <MdOutlineArrowBackIosNew size={25} />
            </Link>
          </div>
          <div className="pro-heading-container">
            <h1 className="project-heading">
              Project Name :<span className="heading-text">{projectname}</span>
            </h1>
          </div>
        </div>

        <div className="emp-card">
          {data.map((e) => {
            return (
              <>
                <li
                  className="emp-card-item"
                  style={{ borderTopColor: randomcolors() }}
                >
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213.jpg"
                    alt="imagess"
                    className="emp-image"
                  />
                  <div className="emp-card-details">
                    <div className="emp-name-card">
                      <h1 className="emp-name">Name:- &nbsp; </h1>
                      <h1 className="emp-name">{e.Name}</h1>
                    </div>
                    <div className="emp-role-card">
                      <h1 className="emp-role">Name:-&nbsp;</h1>
                      <h1 className="emp-role">{e.Role}</h1>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
