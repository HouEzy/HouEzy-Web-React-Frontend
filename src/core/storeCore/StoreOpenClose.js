import React,{useState,useEffect} from "react"
import {updateStoreStatus} from "./storeApi"
import {isAuthenticated} from "../../auth/storeAuth"

const StoreOpenClose=(props)=>{
    
    const [status,setStatus]=useState()

    const handleChange=()=>{
           if(status)
           {
            if(typeof window !== "undefined")
            {
                localStorage.setItem("storeStatus",JSON.stringify(false))         
               
            }
             setStatus(false)
            updateStoreStatus(isAuthenticated().loggedInMember._id)
            window.location.reload()
           }
           else if(!status)
           {
            if(typeof window !== "undefined")
            {
                localStorage.setItem("storeStatus",JSON.stringify(true))         
               
            }
             setStatus(true)
            updateStoreStatus(isAuthenticated().loggedInMember._id)
            window.location.reload()
           }
           
    }
    useEffect(()=>{
      
      console.log("status",localStorage.getItem("storeStatus"));
      setStatus(JSON.parse(localStorage.getItem("storeStatus")))
     },[props])
  return(
    <div className="form-check form-switch">
        <button onClick={handleChange} className="btn btn-sm btn-info d-flex ">{status?`Close Shop`:`Open Shop`}</button>
        <p className=" ml-1 text-dark">Store is {status?`Open`:`Closed`}</p>
    </div>
  )
}

export default StoreOpenClose