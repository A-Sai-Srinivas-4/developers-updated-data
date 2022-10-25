import EmployeeCard from '../EmployeeCard'
import { useState } from 'react'
//import DataE from './../OldJson/jsonData.json'
import Json from '../OldJson/jsonData.json'

import './index.css'





  
  const DeveloperData = () => {
    const [search, setSearch] = useState('');
    

    return (
        <div className="container">
        <div className="search_container">
        <input type="search" placeholder="Search...!" className="search" 
        value={search}
        onChange={(event) => setSearch(event.target.value)} />
        </div>
        <ul className="cards-list">
        {Json.filter(each => each.Name.toLowerCase().includes(search.toLowerCase())).map(eachCard => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
        </div>
    )
  }

  export default DeveloperData

