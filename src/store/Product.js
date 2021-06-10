import React,{useState,useEffect} from 'react'
import StoreLayout from "../core/storeCore/StoreLayout"
import ProductImages from "../core/storeCore/ProductImages"
import {readProduct,updateProductMrp} from "../core/storeCore/storeApi"
import ProductInStock from "../core/storeCore/ProductInStock"

const Product=(props)=>{

    const [product,setProduct]=useState({})
    const [mrp,setMrp]=useState("")

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

   const clickUpdateMrp=(event)=>{
       event.preventDefault()
   }
   
   const handleMrpChange=(event)=>{
       console.log(event.target.value);
       setMrp(event.target.value)
       console.log("mrp :",mrp);
   }
   

   const updateMrpForm=()=>(
       <form onSubmit={clickUpdateMrp}>
           <div className="row">
           <div className="form-group col-5">
              <label className="text-muted">Enter new MRP:</label>
              <input onChange={handleMrpChange}  type="text" className="form-control" placeholder="Update MRP " name="mrp" value={mrp} />
              <button type="submit" className="btn btn-sm btn-info">Update</button>

           </div>
           </div>
       </form>
   )

   useEffect(()=>{
    const productId=props.match.params.productId
    loadProduct(productId)
   },[props]) 

    return(
        <div >
            <StoreLayout>
            <div className="col-10 mx-auto mt-5">
            <div className="row">
                <div className="col-11 col-md-5 my-auto p-2 border"><ProductImages product={product} /></div>
                <div className="col-12 col-md-5">
                    <p className="h3">{product.name}</p>
                    <hr />
                    <p className="text-muted">{product.description}</p> 
                    <hr />
                    <ProductInStock product={product}/>
                    <hr />
                    <h5>MRP : ₹{product.mrp} <del className="text-danger">(₹{product.mrp + product.mrp *(50/100)})</del></h5>
                    {updateMrpForm()}
                    <hr />
                    <h5>Product Highlights</h5>
                    <ul>
                        {product.highlights && product.highlights.map((h,i)=>(
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
            </StoreLayout>
        </div>
    )
}

export default Product