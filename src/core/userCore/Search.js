import React,{useState} from "react"
import {Link} from "react-router-dom"
import UserCity from "./UserCity"
import { MdSearch } from "react-icons/md";



const Search=()=>{
 
  const [searchTerm,setSearchTerm]=useState("")

  const handleSearch=(event)=>{
    console.log("event",event.target.value);
    setSearchTerm(event.target.value)
  }

  

    const searchForm=()=>(
        <form className="p-2">            
            <div className="input-group">
            <input onChange={handleSearch} value={searchTerm} type="search" className="form-control" placeholder="Search for shops " required />
            <div className="input-group-append">
              <Link to={`/search/stores/${searchTerm}`}><button className="btn btn-secondary" type="submit"><MdSearch className="h4"/></button></Link>
            </div>
            </div>           
        </form>
    )
  return(
      <div className="bg-info col-10 col-md-6 mx-auto">
        {searchForm()}
      </div>
  )
  
}

export default Search