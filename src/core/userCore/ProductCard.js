import React from "react"
import {Link} from "react-router-dom"
import ProductImages from "./ProductImage"
import AddToCart from "./AddToCart"

const ProductCard=({product})=>{
    
   return(
       <div className="card" height="">
          <Link to={`/product/${product._id}`}  className="text-decoration-none text-dark">
          
           <div className="row">
               <div className="col-3 col-md-2  my-auto" >
               <ProductImages product={product} className=""  />
               </div>
               <div className="col-9  col-md-10 ">
               <div className="card-header  h3  bg-transparent">{product.name}</div>
                <div className="card-body m-0 ">  
                                    
                    <p className="m-0 ">per {product.unit}</p>
                    <div className="row">
                    <span className=" col-7 d-inline-block h5 m-0">₹{product.sellingPrice} <del className="text-muted">(₹{product.mrp })</del> </span>
                    <span className=" col-4 d-inline-block ms-auto"><AddToCart product={product} /></span>
                    </div>
                </div>
                
            </div>
               </div>
          </Link> 
       </div>
           
          
      
   )
}
export default ProductCard