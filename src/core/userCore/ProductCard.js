import React from "react"
import {Link} from "react-router-dom"
import ProductImages from "./ProductImage"
import AddToCart from "./AddToCart"

const ProductCard=({product})=>{
    
   return(
       <div className="card ">
          <Link to={`/product/${product._id}`}  className="text-decoration-none text-dark">
          <div className="card-header  h6 text-center bg-info">{product.name}</div>
           <div className="row">
               <div className="col-4  my-auto">
               <ProductImages  product={product} className="" />
               </div>
               <div className="col-7  my-auto">
              
                <div className="card-body m-0">  
                                    
                    <p className="m-0">{product.description.substring(0,50) + `.....`}</p>
                    <p className="lead text-danger m-0">₹{product.mrp} <del>(₹{product.mrp + product.mrp *(50/100)})</del> </p>
                </div>
                <div className="col-5 mx-auto">
                 <AddToCart product={product} />
                </div>
            </div>
               </div>
          </Link> 
       </div>
           
          
      
   )
}
export default ProductCard