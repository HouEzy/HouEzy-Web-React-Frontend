import React,{useState} from "react"
import {Link,withRouter} from "react-router-dom"
import {signout,isAuthenticated} from "../../auth/storeAuth"
import SearchProducts from "./SearchProducts"
import StoreOpenClose from "./StoreOpenClose"
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
import "../../styles/storeSideBar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (

    <>
    <div>
    
    <nav className="navbar navbar-default  navbar-expand nav-primary ml-2 bg-info">
    {isAuthenticated() && (<button onClick={menuIconClick} className="btn btn-lg"><FaAlignLeft/></button>)}
                 
                 <Link className="navbar-brand " to="/"><h4 className="text-dark">HouEzy</h4></Link>
                 <sup className="badge text-white border border-warning">SELLER</sup>
                 
                 
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
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p className="">{isAuthenticated().loggedInMember.businessName}</p>
            </div>
            <StoreOpenClose className="m-0 p-0" />
           
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<MdDashboard />}>
                Dashboard<Link to="/store/dashboard" />
              </MenuItem>
              
              <MenuItem icon={<RiProductHuntLine />}>Products <Link to="/store/products" /></MenuItem>
              <MenuItem icon={<MdBorderOuter />}>Orders</MenuItem>
              <MenuItem icon={<MdGraphicEq />}>Sales</MenuItem>
              <MenuItem icon={<BiCog />}>Profile</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={()=>signout()}>LogOut</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    )}
      
    </>
  );
};

export default Header;