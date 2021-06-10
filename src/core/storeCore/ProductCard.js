import React from "react"
import {Link} from "react-router-dom"
import ProductImages from "./ProductImages"

const ProductCard=({product})=>{
   return(
       <div className="card ">
          <Link to={`/store/product/${product._id}`}  className="text-decoration-none text-dark">
          
          <div className="card-header mt-0 bg-info h6 text-center">{product.name}</div>
           <div className="row">
               <div className="col-4  my-auto">
               <ProductImages  product={product} className="" />
               </div>
               <div className="col-7  my-auto">
              
                <div className="card-body">  
                                    
                    <p className="">{product.description.substring(0,50) + `.....`}</p>
                    <p className="lead text-danger">₹{product.mrp} <del>(₹{product.mrp + product.mrp *(50/100)})</del> </p>
                </div>
            </div>
               </div>
          </Link> 
       </div>
           
          
      
   )
}
export default ProductCard