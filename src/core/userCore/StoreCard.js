import React from "react"
import {Link} from "react-router-dom"
import StoreImage from "./StoreImage"


const StoreCard=({store})=>{
    const card=()=>(
        <div className="card">
            <Link to={`/store/${store._id}`}  className="text-decoration-none text-dark">
             <div className="card-header text-center h5 bg-info">{store.businessName}</div>
            <div className="row">
                <div className="col-4 mx-auto my-auto">
               
                <StoreImage store={store} />
                </div>
                <div className="col-8">
                    
                     <div className="card-body float-left">
                          <ul style={{listStyle: "none"}}>
                              <li>{store.status ? (<p className="m-0 badge bg-success">Open Now</p>):(<p className="m-0 badge bg-danger">Closed Now</p>)}</li>
                              <li><p className="m-0 text-muted  "><b>{store.category.name}</b></p></li>
                              <li><p className="m-0 text-muted "><b>{store.openTime} to {store.closeTime} </b></p></li>
                          </ul>
                     </div>
                </div>
            </div>
            </Link>
        </div>
    )
   return (
       <div className="">
         {card()}
       </div>
   )
}

export default StoreCard