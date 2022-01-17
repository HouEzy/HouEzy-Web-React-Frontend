import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import AddCollection from "../core/storeCore/AddCollection"
import UpdateCollection from "../core/storeCore/UpdateCollection"
import {isAuthenticated} from "../auth/storeAuth"
import {listCollectionsByStore,listProductsByStore,listProductsByCollection} from "../core/storeCore/storeApi"
import StoreOpenClose from "../core/storeCore/StoreOpenClose"
import CollectionCard from "../core/storeCore/CollectionCard"
import { MdSearch,MdEdit } from "react-icons/md";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const StoreCollections=(props)=>{

    const [collections,setCollections]=useState([])
    const [products,setProducts]=useState([])
    const [run,setRun]=useState(false)
    const [status,setStatus]=useState(false)

    const loadCollections=storeId=>{
       listCollectionsByStore(storeId).then(data=>{
           
           setCollections(data)
       })
    }
    
    const getNoOfProducts=(collectionId)=>{
        var count=0;
        products.map((p,i)=>{
            if(p.collectionId._id === collectionId)
            {
                count=count+1;
            }
        })
        return count
    }

    const loadProductsByStore=(storeId)=>{
        listProductsByStore(storeId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setProducts(data)
            }
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
                  <td>{getNoOfProducts(c._id)}</td>
                  <td><UpdateCollection collectionId={c._id} setRun={setRun} run={run} /></td>
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
                     <Link className="navbar-brand " to="/"><h4 className="text-dark" style={{zIndex:"0"}}>Collections  </h4></Link>
                    
                                       
                     <ul className="navbar-nav ">
                       <li></li>
                       <li></li> 
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
        loadProductsByStore(storeId)
    },[run])
    

  return(
     <div>
         
         <StoreLayout title="Collections" description="You Can Manage Your Store From Here.">
         <div className="container-fluid col-12 p-0">
         {headline()}
         <div className=" border-top border-5 p-3">
         {level2Bar()}
         </div>
         {displayCollections()}
         </div>
         {console.log(products)}
         </StoreLayout>
     </div>
  )
}

export default StoreCollections