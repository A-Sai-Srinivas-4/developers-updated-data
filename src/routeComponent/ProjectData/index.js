import { v4 as uuidv4 } from 'uuid';
import CardItem from './../CardItem'
import { Link } from 'react-router-dom'
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import OldJson from './../OldJson/jsonData.json'
import Sidebar from "../Sidebar/Sidebar"
import './index.css'





const ProjectData = () => {

    const developer_details=OldJson.map(eachItems=>{
    return eachItems.Projects
    })

    //console.log(developer_details)

const newArray=[]
const projectname = developer_details.map(eachItem=>{


   let x= eachItem.map((name)=>{
       const y= newArray.push(name.Name)
        return y
    })
    return x
})


const uniq_project_names = [...new Set(newArray)];
//console.log(uniq_project_names)







    return(

        <>
        <div className='back-container'>
    <Link to="/" className='back-option'><MdOutlineArrowBackIosNew size={25} /></Link>
    </div>

        <div className="cards-lists">

        {uniq_project_names.map(eachName => {
            return (
                <CardItem  key={uuidv4()} details={eachName}  />                 
            )
        })}
        
      </div>
      
  
        </>

    


    )
}

export default ProjectData


