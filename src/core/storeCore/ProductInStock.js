import React,{useState,useEffect} from "react"
import {updateProductStatus} from "./storeApi"
import {isAuthenticated} from "../../auth/storeAuth"

const ProductInStock=({product})=>{
    
    const [status,setStatus]=useState(true)

    const handleChange=()=>{
           if(status)
           {
             setStatus(false)
            updateProductStatus(product._id)
           }
           else if(!status)
           {
             setStatus(true)
             updateProductStatus(product._id)
            
           }
           
    }
    useEffect(()=>{
      const productId=product._id
      
      setStatus(product.inStock)
     },[product])
  return(
    <div className="form-check form-switch">
        <button onClick={handleChange} className="btn btn-sm btn-info d-inline px-2 ">{status?`set Not Available`:` set Available`}</button>
        <p className="d-inline ml-1 text-dark">  Product is {status?`Available`:`Not Available`}</p>
    </div>
  )
}

export default ProductInStock