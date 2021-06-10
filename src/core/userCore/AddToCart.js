import React,{useState} from "react"
import { Toast } from 'react-bootstrap';
import ToastMessage from "./ToastMessage"
import {addItem} from "./cartHelpers"
import {addToCart,getCart} from "./userApi"
import {isAuthenticated} from "../../auth/userAuth"


const AddToCart=({product})=>{
   
    
    const [cartStore,setCartStore]=useState();
    const [showToast , setShowToast]=useState(false)
    

    const setStore=()=>{
        setCartStore(product.store)
    }

    const clickButton=(e)=>{
       e.preventDefault()
       addToCart(isAuthenticated().loggedInMember._id,product._id,product.store).then(data=>{  
           alert(data)
         })
       
      
    }

   

    const showButton=()=>(
        <div>
            <button onClick={clickButton} className="btn btn-outline-info">Add To Cart</button>
        </div>
    )

    const showToastMessage=()=>{
        if(showToast)
        {
          return <div style={{position:""}}><ToastMessage /></div> 
        }
    }
    

    
    return(
        <div>
           
            {showButton()}
           {showToastMessage()}
        </div>
    )

}

export default AddToCart