import React from "react"
import {isAuthenticated} from "../../auth/storeAuth"

import StoreSideBar from "./StoreSideBar"



const StoreLayout=({children})=>(
   
       <div> 
               
       
        <StoreSideBar /> 
        {isAuthenticated() && !JSON.parse(localStorage.getItem("storeStatus")) && (<p className="alert alert-sm alert-danger text-center small mb-0 h-25">Store is Closed. Set it Open for Recieving Orders.</p>)}       
        <div>{children}</div>
        </div>
);

export default StoreLayout;