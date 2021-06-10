import React,{useState,useEffect} from "react"
import UserLayout from "../core/userCore/UserLayout"
import {Link} from "react-router-dom"
import ProductImages from "../core/userCore/ProductImage"
import RemoveFromCart from "../core/userCore/RemoveFromCart"
import QuantityUpdate from "../core/userCore/QuantityUpdate"
import {getCart} from "../core/userCore/userApi"
import {isAuthenticated} from "../auth/userAuth"
const Cart=(props)=>{
    
    const [items,setItems]=useState([])
    const [run,setRun]=useState(false)

    
    const loadCartItems=(userId)=>{
       getCart(userId).then(data=>{
           if(data.error)
           {console.log(data.error);}
           else{setItems(data)}
       })
    }

    const getCartTotal=()=>{
        let total=0
        items.map((item,i)=>{
            total=total+item.count*item.productId.mrp
        })
        return total
    }
   
        useEffect(()=>{
            if(isAuthenticated())
            {
                const userId=isAuthenticated().loggedInMember._id                  
                loadCartItems(userId)
            }
         },[run])


    const cartProductCard=(item)=>(
        <div className="card ">
          <Link to={`/product/${item.productId._id}`}  className="text-decoration-none text-dark">
          
           <div className="row">
               <div className="col-3  my-auto">
               <ProductImages  product={item.productId} className="" />
               </div>
               <div className="col-7  my-auto">
              
                <div className="card-body m-0 "> 
                    <p className="m-0">{item.productId.name}</p> 
                    <p className=" m-0">₹{item.productId.mrp} <del>(₹{item.productId.mrp + item.productId.mrp *(50/100)})</del> </p>
                    <p>{item.count}</p>
                    <div className="row m-0">
                    <div className="col-10 my-auto "><QuantityUpdate className="" productItem={item}  setRun={setRun} run={run} /></div>
                    <div className="col-2 my-auto"><RemoveFromCart className="" product={item.productId}  setRun={setRun} run={run} /></div>
                    </div>
                </div>
               
            </div>
               </div>
          </Link> 
       </div>
    )

    const showCartProducts=()=>(
        <div className="col-12 col-md-6 mx-2 my-auto">
            <p className="text-center h3 mt-1">Your Cart</p>
            <div className=" overflow-auto m-0 " style={{height:"50vh"}} >
           <br />
            {items.length>0?
            items.map((item,i)=>(
                <div className="col-12 col-md-10 mt-3 mx-auto">{item.productId && cartProductCard(item)}</div>
            )):
            (<div className="h3 mx-auto text-muted">Your Cart is Empty</div>)}
            <br/>
            </div>
        </div>
    )

    const showCartSummary=()=>(
        <div className="col-12 col-md-4 mx-auto my-auto ">
            <div className="card shadow-lg" style={{height:""}}>
                <div className="card-header h5 bg-info">Cart Summary</div>
                <div className="card-body ">
                    <p className="lead">Product Total : ₹ {getCartTotal()}</p>
                    <p className="lead">Delivery Charges :₹ 20</p>
                    <hr/>
                    <p className="h4">Total : ₹ {getCartTotal()+20}</p>
                    <hr />
                    <Link to="/checkout">
                    <button className=" mt-3 col-12 btn btn-info btn-lg btn-block ">Proceed To Checkout</button>
                    </Link>
                </div>

            </div>
        </div>
    )

    return(
        <div>
            <UserLayout showCategoryBar={false}>
              <div className="row" >
              {showCartProducts()}
              {showCartSummary()}
              </div>
            </UserLayout>
        </div>
    )
}

export default Cart