import React,{useState,useEffect} from "react"
import {updateCartQuantity} from "./userApi"
import {isAuthenticated} from "../../auth/userAuth"


const QuantityUpdate=({productItem,setRun = f => f, run = undefined})=>{

    const [count,setCount]=useState()


    const increaseCount=(e)=>{
        e.preventDefault()
        setCount(count+1)
        updateCartQuantity(isAuthenticated().loggedInMember._id,productItem.productId._id,count+1)
        setRun(!run);
    }

    const decreaseCount=(e)=>{
        e.preventDefault()
       count>1 && setCount(count-1)
      count>1&& updateCartQuantity(isAuthenticated().loggedInMember._id,productItem.productId._id,count-1)
        count>1 &&  setRun(!run);
    }

    useEffect(()=>{
        setCount(productItem.count)
     },[productItem])

    const buttons=()=>(
        <div>
            <div class="btn-group" role="group">
                <button onClick={decreaseCount} className="btn btn-sm btn-info ">-</button>
                 <p className="p-2">{count}</p>
                 <button onClick={increaseCount} className="btn btn-sm btn-info">+</button>
            </div>
            <div className="row">
                
            </div>
        </div>
    )

    return(
        <div>{buttons()}</div>
    )
}

export default QuantityUpdate