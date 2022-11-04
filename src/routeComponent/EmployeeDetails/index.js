import { useState, useEffect} from "react"
//import Json from './../Json/JsonData.json'
import OldJson from './../OldJson/jsonData.json'
import DeveloperData from "../DeveloperData"
import Footer from './../Footer'
import { Link } from "react-router-dom"
import {MdOutlineArrowBackIosNew} from "react-icons/md"

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
        <div className='back-container'>
        <Link to="/resources" className='back-option'><MdOutlineArrowBackIosNew size={25} /></Link>
        </div>

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
                <h1 className="headings" >PROJECTS : <span className="spans">{`${eachItems.Name}`}</span></h1>
                <h1 className="headings" >Role : <span className="spans">{`${eachItems.Role}`}</span></h1>
                <h1 className="headings" >Tech_Stack : <span className="spans">{`${eachItems.Tech_Stack}`}</span></h1>
                <h1 className="headings" >Allocation : <span className="spans">{`${eachItems.Allocation}`}</span></h1>
                
                <hr />   
                </div>

              )
            })
          }
          

        </div>
        
        <DeveloperData />
        <Footer />

        </>
           
    )
 }
 export default EmployeeDetails
