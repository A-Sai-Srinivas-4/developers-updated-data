import Header from '../Header'
import Footer from './../Footer'
//import DeveloperData from './../DeveloperData'
import ProjectData from './../ProjectData'
//import ProjectDetails from '../ProjectDetails'
import Sidebar from '../Sidebar/Sidebar'

import './index.css'

const Projects = () => (
  <>
  <div>
<Sidebar/>
    <h1 className="project-heading">Projects</h1>
   
    <ProjectData />
    </div>
    
    
  </>
)

export default Projects