import React from "react"
import AdminMenu from "./AdminMenu2"



const AdminLayout=({title="",description="",children})=>(
   <div>
        <AdminMenu />
        
        <div>{children}</div>
   </div>
);

export default AdminLayout;