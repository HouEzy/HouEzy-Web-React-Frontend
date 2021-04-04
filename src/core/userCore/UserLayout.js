import React from "react"
import UserMenu from "./UserMenu"



const UserLayout=({title="",description="",children})=>(
   <div>
        <UserMenu />
        <div className="jumbotron bg-warning text-center">
            <h2 >{title}</h2>
            <p >{description}</p>
        </div>
        <div>{children}</div>
   </div>
);

export default UserLayout;