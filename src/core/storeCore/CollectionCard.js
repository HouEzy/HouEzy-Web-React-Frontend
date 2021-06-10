import React from "react"
import {Link} from "react-router-dom"

const CollectionCard=({name})=>{
    return(
        <div>
            <Link to="/store/products" className="text-decoration-none ">
               <div className="card mx-auto shadow-lg m-4 h-75  border-info rounded">
                  <h3 className="text-center text-dark my-auto  p-2">{name}</h3>
               </div>
            </Link>
        </div>
    )
}
export default CollectionCard