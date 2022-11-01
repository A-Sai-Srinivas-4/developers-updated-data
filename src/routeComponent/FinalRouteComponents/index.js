import { Route, Switch } from "react-router-dom";
import Resources from "../Resources";
import Home from "../Home";
import Projects from "../Projects";
import EmployeeDetails from "../EmployeeDetails";
import LoginPage from "./../LoginPage";
import ProjectDetails from "../ProjectDetails";
//import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header";
import Footer from "../Footer";
import NotFound from "../NotFound";

import "./index.css";

const FinalRouteComponents = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/projects/:id" component={EmployeeDetails} />
          <Route exact path="/project_details" component={ProjectDetails} />
          <Route
            exact
            path="/project_details/:projectname"
            component={ProjectDetails}
          />
          <Route component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
       
      </div>
    </div>
    <Footer />
  </div>
);

export default FinalRouteComponents;
