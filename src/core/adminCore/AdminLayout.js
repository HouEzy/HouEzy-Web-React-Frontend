import React from "react"
import AdminMenu from "./AdminMenu2"



const AdminLayout=({title="",description="",children})=>(
   <div>
        <AdminMenu />
        <div className="jumbotron bg-info text-center container-fluid">
            <h2 >{title}</h2>
            <p >{description}</p>
        </div>
        <div>{children}</div>
   </div>
);

export default AdminLayout;