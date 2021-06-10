import React from "react"
import {isAuthenticated} from "../../auth/userAuth"
import {removeFromCart} from "./userApi"

import { MdDeleteForever} from "react-icons/md";


const RemoveFromCart=({product, setRun = f => f, run = undefined})=>{

    const clickButton=(e)=>{
        e.preventDefault()
        removeFromCart(isAuthenticated().loggedInMember._id,product._id).then(data=>{          
        })
        setRun(!run);
     }
    const showButton=()=>(
        <div>
            <button onClick={clickButton} className="btn btn-outline-danger"><MdDeleteForever /></button>
        </div>
    )

    return(
        <div>
            {showButton()}
        </div>
    )
}

export default RemoveFromCart