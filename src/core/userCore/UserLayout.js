import React from "react"
import UserMenu from "./UserMenu"
import Search from "../userCore/Search"
import CategoryBar from "../userCore/CategoryBar"
import Footer from "../userCore/Footer"



const UserLayout=({showSearch=true,showCategoryBar=true,children})=>(
   <div >
        <UserMenu className="mb-0" />
        {showSearch && (
            <div className="mx-auto bg-info mt-0 ">
                            
               <Search />
               
            </div>  
        )}  
        {showCategoryBar && (
            <div className="bg-muted mb-3"><CategoryBar /></div>
        )}
        <div className="mt-2" style={{minHeight:"80vh"}}>{children}</div>

        <div><Footer /></div>
   </div>
);

export default UserLayout;