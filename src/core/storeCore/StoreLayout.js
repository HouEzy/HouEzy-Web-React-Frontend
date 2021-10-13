import React from "react"
import {isAuthenticated} from "../../auth/storeAuth"

import StoreSideBar from "./StoreSideBar"



const StoreLayout=({children})=>(
   
       <div className="container-fluid m-0 p-0 overflow-auto" style={{height:"100vh"}}  >
       <div className="row m-0" style={{height:"100vh" }}>      
       <div className=" col-lg-2 m-0 p-0 position-fixed align-self-start " style={{zIndex:"9999" ,}} > <StoreSideBar /> </div>
        {isAuthenticated() && !JSON.parse(localStorage.getItem("storeStatus")) && (<p className="alert alert-sm alert-danger text-center small mb-0 h-25">Store is Closed. Set it Open for Recieving Orders.</p>)} 
        <div className="col-lg-3 d-none d-lg-block  p-0" style={{backgroundColor:"#ffffff"}}></div>      
        <div className="col-lg-9  p-0 " style={{overflow:"auto"}}>{children}</div>
        </div>
       </div>
);

export default StoreLayout;