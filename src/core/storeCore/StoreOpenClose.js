import React,{useState,useEffect} from "react"
import {updateStoreStatus} from "./storeApi"
import {isAuthenticated} from "../../auth/storeAuth"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


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
    <div className="" style={{zIndex:"9999999"}}>
        <BootstrapSwitchButton onChange={()=>{handleChange()}} checked={status}  size="lg" onlabel="Open" offlabel="Closed" onstyle="success" offstyle="danger" />
    </div>
  )
}
 
export default StoreOpenClose