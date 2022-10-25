//import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.css'










const EmployeeCard = (props) => {



         const randomcolors = () => {
             return  '#' +  Math.floor(Math.random() * 26743815).toString(16)
        //      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
         }




        
        const {cardDetails} = props
        const {id,Name,Role,image_url,Projects} = cardDetails

        return(
        <Link to={`/projects/${id}`} className="nav-link" >
        <li className="dev-card-item" style={{borderTopColor: randomcolors()}}  >
        <img src={image_url} alt="imagess" className="image"/>
        <div className="cards">
        <h1 className="heading">Name :- {Name}</h1>
        <h1 className="discription">Role :- {Role}</h1>
        <div className="pro_card">

        <h2 className="discription">Project-Name :- </h2>  

        <p>{Projects.map(each => <h6>{each.Name}</h6>)} </p>

        </div>
        </div>
        </li>
        </Link>

        )
    }


export default EmployeeCard