import React,{useState,useEffect} from "react"
import {API} from "../../config"

const ProductImages=({product})=>{
    
     return(
         <div className="d-flex align-items-center justify-content-center text-center">
             <img src={`${API}/product/photo/${product._id}`} width="100%" height="100%" className="rounded"></img>
         </div>
     )
}
export default ProductImages