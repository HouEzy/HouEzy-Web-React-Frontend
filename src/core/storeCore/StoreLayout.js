import React from "react"

import StoreSideBar from "./StoreSideBar"



const StoreLayout=({title="",description="",children})=>(
   
       <div>        
        <StoreSideBar />        
        <div className="jumbotron bg-info text-center container-fluid">
            <h2 >{title}</h2>
            <p >{description}</p>
        </div>
       
        
        <div>{children}</div>
        </div>
);

export default StoreLayout;