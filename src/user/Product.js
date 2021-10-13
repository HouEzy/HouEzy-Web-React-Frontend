import React,{useState,useEffect} from 'react'
import UserLayout from "../core/userCore/UserLayout"
import ProductImage from "../core/userCore/ProductImage"
import AddToCart from "../core/userCore/AddToCart"
import {readProduct} from "../core/userCore/userApi"

const Product=(props)=>{

    const [product,setProduct]=useState({})

   const loadProduct=productId=>{
       readProduct(productId).then(data=>{
          if(data.error)
          {
              console.log(data.error);
          }
          else{
              console.log(data);
              setProduct(data)
          }
       })
   }

   

   
   useEffect(()=>{
    const productId=props.match.params.productId
    loadProduct(productId)
   },[props]) 

   const displayProduct=()=>(
    <div className="row">
    <div className="col-11 col-md-5  p-2 ">
    <div className=" p-2 border"><ProductImage product={product} /></div>
    <div className="col-6 mx-auto mt-2"><AddToCart product={product} /></div>
    </div>
    <div className="col-12 col-md-5">
        <p className="h3">{product.name}</p>
        <hr />
        <p className="text-muted">{product.description}</p> 
        <hr />
        
        <hr />
        <h5>MRP : ₹{product.mrp} <del className="text-danger">(₹{product.mrp + product.mrp *(50/100)})</del></h5>
       
        <hr />
        <h5>Product Highlights</h5>
        <ul>
            {product.highlights && product.highlights.map((h,i)=>(
                <li key={i}>{h}</li>
            ))}
        </ul>
    </div>
</div>
   )

    return(
        <div className="overflow-auto" style={{height:"100vh"}} >
            <UserLayout showCategoryBar={false}>
            <div className="col-10 mx-auto mt-5">
               {displayProduct()}
            </div>
            </UserLayout>
        </div>
    )
}

export default Product