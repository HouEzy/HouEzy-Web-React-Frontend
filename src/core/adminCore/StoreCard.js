import React from "react"
import ShowStoreImage from "./ShowStoreImage"
import AddCategory from "./AddCategory"
import AddCollection from "./AddCollection"
import {Link} from "react-router-dom"


import {FaBahai} from "react-icons/fa";
import {MdLocationCity,MdAccessTime,MdStoreMallDirectory} from "react-icons/md";


const StoreCard=({store})=>{

    return(
    <div>
       
        <div className="card"  >
            <div className="row">
            <Link to={`/store/${store._id}`}><h6 className="card-header text-center font-weight-bold ">{store.businessName}</h6></Link>
                <div className="col-7 col-sm-3 mx-auto  col-md-2 d-flex align-items-center justify-content-center text-center">
                  <ShowStoreImage   store={store}   />
                </div>
                
                <div className="col-sm-7 ">                
                  <div className="card-body">
                     <AddCategory />
                     <AddCollection />
                     <div className="row no-gutters">
                     <p className="col-sm-6 col-6 small  "><FaBahai className=""/>{store.category.name}</p>
                     <p className="col-sm-5 col-6 small"><MdLocationCity className=""/>{store.city}</p>
                     </div>
                     
                     <Link to={`/store/${store._id}`}><button className="btn">Visit</button></Link>
                  </div>
                  
                </div>
            </div>
        </div>
        
    </div>
    )

}

export default StoreCard;