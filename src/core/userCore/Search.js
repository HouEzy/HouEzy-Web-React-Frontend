import React,{useState,useEffect} from "react"
import {Link,Redirect} from "react-router-dom"
import {listCategories} from "./userApi"
import {Dropdown} from "react-bootstrap"
import { MdSearch } from "react-icons/md";



const Search=()=>{
 
  const [searchTerm,setSearchTerm]=useState("")
  const [categories , setCategories]=useState([])
  const [selectedCategory,setSelectedCategory]=useState("")
  const [redirectToCategory,setRedirectToCategory]=useState(false)

  const loadCategories=()=>{
    listCategories().then(data=>{
        if(data.error)
        {
            console.log(data.error);
        }
        else
        {
            setCategories(data)
        }
    })
}

  const handleCategory=(event)=>{
    console.log(event.target.value);
    setSelectedCategory(event.target.value)
  }

  const handleSearch=(event)=>{
    
    setSearchTerm(event.target.value)
    setRedirectToCategory(true)
  }


  useEffect(()=>{
    loadCategories()
  },[])

  

    const searchForm=()=>(
        <form className="p-2">            
            <div className="input-group">
                    <div className="input-group-prepend bg-white col-4 col-md-2 mx-auto rounded">
                    <Dropdown>
                     <Dropdown.Toggle variant="white" id="dropdown-basic">
                        Category
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/stores/all">All</Dropdown.Item>
                      {categories.map((c,i)=>(
                                 <Dropdown.Item href={`/stores/${c._id}`} key={i} value={c._id}>
                                     {c.name}
                                 </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
            <input onChange={handleSearch} value={searchTerm} type="search" className="form-control" placeholder="Search for shops " required />
            <div className="input-group-append">
             <Link to={`/search/stores/${searchTerm}`}><button className="btn btn-secondary" type="submit" href={`localhost:3000/search/stores/${searchTerm}`}><MdSearch className="h4"/></button></Link>
            </div>
            </div>           
        </form>
    )

    
  return(
      <div className="bg-info col-12 col-md-6 mx-auto">
        {searchForm()}
        
      </div>
  )
  
}

export default Search