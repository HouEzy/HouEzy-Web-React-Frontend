import React,{useState} from "react"
import {Link,withRouter} from "react-router-dom"
import {signout,isAuthenticated} from "../../auth/storeAuth"
import moment from "moment"
import SearchProducts from "./SearchProducts"
import StoreOpenClose from "./StoreOpenClose"

import {Offcanvas , Button} from "react-bootstrap"
import OffcanvasMenu from 'react-offcanvas-menu-component';
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart,FaAlignLeft } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { MdDashboard,MdCollectionsBookmark,MdBorderOuter,MdGraphicEq } from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
//import "../../styles/storeSideBar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [show, setShow] = useState(false);

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
//082032
    <>
    <div>
    
    <nav className="navbar navbar-default sticky-top navbar-expand nav-primary ml-2   d-lg-none" style={{backgroundColor:"#082032"}}>
    {isAuthenticated() && (<button onClick={menuIconClick} className="btn btn-lg text-light"><FaAlignLeft/></button>)}
                 
                 <Link className="navbar-brand " to="/"><h3 className="text-light"><img className="img-fluid" src="/images/BIZZNECT-logo-white.png" width="150px" height="60px"/></h3></Link>
                 
                 
                 
                 <ul className="navbar-nav ms-auto">
                    {!isAuthenticated() && (
                      <li className="nav-item">
                        <Link className="nav-link text-dark" to="/store/signup">Sign up/In</Link>
                     </li>
                    )}
                     
                     
                     
                 </ul>  
                                    
    </nav>
    
    </div>
    {isAuthenticated() && isAuthenticated().loggedInMember.role=="Store" && (
      <div id="header">
            
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader  >
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <div className="d-none d-lg-flex col-12 mx-auto p-3 justify-content-center">
                <div className="col-12  my-auto  text-white text-center" ><span className="float-start my-auto"><img src="/images/logo-white.png" width="40px" height="40px"></img></span><span className="h2 my-auto mt-3">Byznex</span></div>


              </div>
              
             
            </div>
            
           
          </SidebarHeader>
          <SidebarContent className="overflow-auto" style={{overflowY:"hidden"}}>
            <Menu iconShape="square" className="m-0">
              
              <MenuItem className="" icon={<MdDashboard />}>
                Dashboard<Link to="/store/dashboard" />
              </MenuItem>
              <MenuItem icon={<RiProductHuntLine />}>Collections <Link to="/store/collections" /></MenuItem>
              <MenuItem icon={<RiProductHuntLine />}>Products <Link to="/store/products" /></MenuItem>
              <MenuItem icon={<MdBorderOuter />}>Orders<Link to="/store/orders" /></MenuItem>
              <MenuItem icon={<MdGraphicEq />}>Sales</MenuItem>
              <MenuItem icon={<BiCog />}>Account <Link to="/store/account"></Link></MenuItem>
             
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square" className="text-center">
            <StoreOpenClose/>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    )}
      
    </>
  );
};

export default Header;