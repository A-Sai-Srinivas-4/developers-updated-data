import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "../OldJson/jsonData.json";
import EmployeeCard from "../EmployeeCard";
import "./index.css";


const DeveloperData = () => {
  const [search, setSearch] = useState("");
  const [devList, setDevList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setDevList(Data);
    setSearchText(search);
  }, []);

  const renderSearchSection = () => (
    <div className="search-container">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search"
        placeholder="Search"
      />
    </div>
  );

  const renderNoDevsView = () => (
    <div className="no-books-container">
      <img
        src="https://res.cloudinary.com/diocftr6t/image/upload/v1651941086/Asset_1_1SearchNotFoundImage_bka7pe.png"
        className="no-books"
        alt="no books"
      />
      <p className="empty-list-message">
        Your search for {searchText} did not find any matches.
      </p>
    </div>
  );

  

  const renderDevList = () => (
    <ul className="dev-cards-list">
      {devList
        .filter((each) =>
          each.Name.toLowerCase().includes(search.toLowerCase())
        )
        .map((eachCard) => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
    </ul>
  );

  const showDevDetailsByRole =  (event) => {
    const myArray = []
    Data.map(each => each.Role === event.target.value && [myArray.push(each)])
    myArray.forEach(element => {
      setDevList(myArray)
    })
  }

  const roleDropdown = () => {
    const roleDetails = [...new Set(Data.map(e => e.Role))]

    //console.log(roleDetails)
   
    return(
    <Dropdown>
    <div className="roles-clear-container">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        Role
      </Dropdown.Toggle>
      <button className="clear-btn" onClick={() => setDevList(Data)}>Clear</button>
    </div>
      

      <Dropdown.Menu >
        {
          
          roleDetails.map(e => {
            return(
              <div className="roles-options-container">
              <input type="button" className="role-option" name="Role" value={e} onClick={showDevDetailsByRole} />
              </div>
              
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
    )
    
    };

  return (
    <>
    
      <div className="dev-display-container">
      {roleDropdown()}
        <div className="dev-search-container">{renderSearchSection()}</div>
      </div>

      {renderDevList()}
    </>
  );
};

export default DeveloperData;
