import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import AddCollection from "../core/storeCore/AddCollection"
import {isAuthenticated} from "../auth/storeAuth"
import {listCollectionsByStore} from "../core/storeCore/storeApi"
import CollectionCard from "../core/storeCore/CollectionCard"
import { MdSearch } from "react-icons/md";


const StoreCollections=(props)=>{

    const [collections,setCollections]=useState([])
    const [run,setRun]=useState(false)
    

    const loadCollections=storeId=>{
       listCollectionsByStore(storeId).then(data=>{
           
           setCollections(data)
       })
    }
    const displayCollections=()=>(
       <div>
           
        <div className="shadow-lg">
           <table className="table table-striped text-center">
             <thead className="p-2">
             <tr>
                  <th scope="col">#</th>
                  <th scope="col">Collection Name</th>
                  <th scope="col">Products</th>
                  <th scope="col">Modify</th>
             </tr>
             </thead>
             <tbody>
             {collections.map((c,i)=>(
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{c.name}</td>
                  <td>{3}</td>
                  <td>{"1 2 3"}</td>
                </tr>   
             ))}
             </tbody>
           </table> 
        </div>
            
            
       </div>
    )

    const searchbar=()=>(
        <div className="col-12">
           <form>
               <div className="input-group">
               <input  type="search" className="form-control" placeholder="Search for collections " required />
               <div className="input-group-append">
               <button className="btn btn-secondary" type="submit" ><MdSearch className="h4"/></button>
               </div>
               </div>
           </form> 
        </div>
    )

    const navshow=()=>(
        <div style={{height:"60px"}} className="d-lg-none"></div>
    )

    const headline=()=>(
        <nav className="navbar navbar-default  navbar-expand nav-primary ml-2 bg-transparent shadow-lg  " style={{zIndex:"-1"}}>
                     
                     <Link className="navbar-brand " to="/"><h4 className="text-dark" style={{zIndex:"0"}}>Collections</h4></Link>
                                          
                     <ul className="navbar-nav ms-auto">
                       
                         
                     </ul>                                         
        </nav>
    )

    const level2Bar=()=>(
        <div className="row ">
          <div className="col-6 col-lg-2">
          <AddCollection setRun={setRun} run={run} />
          </div>
          <div className="col-6 col-md-4 ms-auto"> 
          <div className="">
          {searchbar()}
          </div>
          </div>
        </div>
    )

    useEffect(()=>{
        const storeId=isAuthenticated().loggedInMember._id;
        loadCollections(storeId)
    },[run])
    

  return(
     <div>
         
         <StoreLayout title="Collections" description="You Can Manage Your Store From Here.">
         <div className="container-fluid col-12 p-0">
         {navshow()}
         {headline()}
         <div className=" border-top border-5 p-3">
         {level2Bar()}
         </div>
         {displayCollections()}
         </div>
         
         </StoreLayout>
     </div>
  )
}

export default StoreCollections