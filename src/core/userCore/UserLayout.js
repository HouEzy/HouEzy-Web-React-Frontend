import React from "react"
import UserMenu from "./UserMenu"
import Search from "../userCore/Search"
import CategoryBar from "../userCore/CategoryBar"
import Footer from "../userCore/Footer"



const UserLayout=({showSearch=true,showCategoryBar=true,showSideMenu=true,children})=>(
   <div >
        {showSideMenu ? (<UserMenu />) : (<UserMenu showSidebar={false} />)}
        
        
        {showSearch && (<div className="mx-autobg-info mt-0 bg-info" ><Search /></div> )}  
        {showCategoryBar && (<div className="bg-muted mb-3  d-sm-block"><CategoryBar /></div>)}
        
        <div className="mt-3">{children}</div>
        <div><Footer /></div>
   </div>
);

export default UserLayout;