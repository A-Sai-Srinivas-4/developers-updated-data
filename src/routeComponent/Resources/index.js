import Header from '../Header'
import DeveloperData from './../DeveloperData'
import Footer from './../Footer'
import { Link } from 'react-router-dom'
//import EmployeeCard from './../EmployeeCard'
import './index.css'

const Resources = () => (
  <>

    <div>
    <h1 className="headingsss">Developer-Details</h1>
    <Link to='/' className="">
    <button className='back_button'>Back</button>
    
    </Link>
    
    
    <DeveloperData />
    
    </div>

    <Footer />


  </>
)

export default Resources