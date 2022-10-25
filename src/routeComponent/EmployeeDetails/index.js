import { useState, useEffect} from "react"
//import Json from './../Json/JsonData.json'
import OldJson from './../OldJson/jsonData.json'
import DeveloperData from "../DeveloperData"
import Footer from './../Footer'
import { Link } from "react-router-dom"

 import './index.css'
 
 const EmployeeDetails =(props)=>{

    console.log(typeof(props.match.params.id))
    console.log(props)
    const {match} = props
    const {params} = match
    const {id} = params


    const  [data, setData] = useState([]);

    const [projectData, setProjectData] = useState([]);
    console.log(projectData)
    

    useEffect(() => {
        const data = OldJson.find((eachData) => String(eachData.id) === id);

        if (data) {
            setData(data);
            setProjectData(data.Projects)
        }
    }, [id] )


    return(
        <>
        <div className="details_container">


        <div className="top_details">
        <img src={data.image_url} alt="" className="images"/>
        <div className="cards">
        <h1 className="headings">NAME  :-  <span className="spans">{data.Name}</span></h1>
        <h1 className="headings">ROLE  :-  <span className="spans">{data.Role}</span></h1>
        <h1 className="headings">EXPERIENCE  :-  <span className="spans">{data.Experience}</span></h1>
        </div> 
        </div>
 
        {
            projectData.map(eachItems=>{
              return (
                <div className="project_container">  
                <h1 className="headings" >{`PROJECTS : ${eachItems.Name}`}</h1>
                <h1 className="headings">{`Role : ${eachItems.Role}`}</h1>
                <h1 className="headings">{`Tech_Stack : ${eachItems.Tech_Stack}`}</h1>
                <h1 className="headings">{`Allocation : ${eachItems.Allocation}`}</h1>  
                <hr />   
                </div>

              )
            })
          }
          <Link to='/Resources' className="">
                <button className='back_button'>Back</button>
                </Link>

        </div>
        
        <DeveloperData />
        <Footer />

        </>
           
    )
 }
 export default EmployeeDetails

