import React,{useState} from "react"
import {Link,withRouter} from "react-router-dom"
import {signout,isAuthenticated} from "../../auth/userAuth"
import Search from "../userCore/Search"
import UserCity from "./UserCity"

import {
   ProSidebar,
   Menu,
   MenuItem,
   SidebarHeader,
   SidebarFooter,
   SidebarContent,
 } from "react-pro-sidebar";
 
 //import icons from react icons
 import { FaList, FaRegHeart,FaAlignLeft ,FaSignInAlt} from "react-icons/fa";
 import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
 import { RiProductHuntLine } from "react-icons/ri";
 import { BiCog } from "react-icons/bi";
 import { MdDashboard,MdCollectionsBookmark,MdBorderOuter,MdShoppingCart,MdLocationOn,IoMdLogIn,MdGraphicEq } from "react-icons/md";

 import "react-pro-sidebar/dist/css/styles.css";
 import "../../styles/storeSideBar.css";


const UserMenu=()=>{
   const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (

   <>
   <div>
   
   <nav className="navbar navbar-default navbar-static-top  navbar-expand nav-primary ml-2 bg-info">
   <button onClick={menuIconClick} className="btn btn-lg"><FaAlignLeft/></button>
                
                <Link className="navbar-brand" to="/"><h4 className="text-dark ">HouEzy</h4></Link>
                
               
                
                <ul className="nav nav-tabs ms-auto  ">
                   <li className="nav-item m-0"><Link to="/cart" className="nav-link text-dark"><MdShoppingCart/>Cart</Link></li>
                   {!isAuthenticated() && (
                     <li className="nav-item m-0">
                       <Link className="nav-link text-dark" to="/user/signin"><FaSignInAlt/> Login</Link>
                    </li>
                   )}
                    
                </ul>
               
                                   
   </nav>
   
   </div>
  
     <div id="header">
           
         {/* collapsed props to change menu size using menucollapse state */}
       <ProSidebar collapsed={menuCollapse} >
         <SidebarHeader>
         <div className="logotext">
             {/* small and big change using menucollapse state */}
             <p className="">{isAuthenticated() ? `Hello ,${isAuthenticated().loggedInMember.name}` : `Hello`}</p>
           </div>
            <hr />
           <div className="col-9 mx-auto"><UserCity /></div>
            <br />         
         </SidebarHeader>
         <SidebarContent>
           <Menu iconShape="square">
             <MenuItem icon={<MdBorderOuter />}>Become Seller Partner</MenuItem>
             <hr/>
             <MenuItem icon={<BiCog />}>Home <Link to="/" /></MenuItem>

             <MenuItem icon={<MdShoppingCart />}>
               Your Cart<Link to="/cart" />
             </MenuItem>
             <MenuItem icon={<MdCollectionsBookmark />}>Order History<Link to="/" /></MenuItem>
             <MenuItem icon={<RiProductHuntLine />}>Your Wishlist <Link to="/" /></MenuItem>
             
             <MenuItem icon={<BiCog />}>Account</MenuItem>
           </Menu>
         </SidebarContent>
         <SidebarFooter>
           <Menu iconShape="square">
             <MenuItem icon={<FiLogOut />} onClick={()=>signout()}>LogOut <Link to="/" /></MenuItem>
           </Menu>
         </SidebarFooter>
       </ProSidebar>
     </div>
   
     
   </>
 );
}

export default UserMenu;

<div classNameName="container-fluid ">
<div classNameName="row">
   <div classNameName="col">
       <nav classNameName="navbar navbar-expand nav-primary">
           <Link classNameName="navbar-brand " to="/"><h1 classNameName="text-dark">HouEzy</h1></Link>
           <ul classNameName="navbar-nav ms-auto">
                <li classNameName="nav-item">
                <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Link with href</a>                           </li>
               <li classNameName="nav-item">
                  <Link classNameName="nav-link text-dark" to="/user/signin">SignIn</Link>
               </li>
               <li classNameName="nav-item">
                  <Link classNameName="nav-link text-dark" to="">Cart</Link>
               </li>
               <li classNameName="nav-item">
                  <Link classNameName="nav-link text-dark" to="">Account</Link>
               </li>
           </ul>
           
           
          
           
        </nav>

        
        
   </div>
   
</div>
</div>
