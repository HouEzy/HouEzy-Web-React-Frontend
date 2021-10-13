import React from "react"
import {Link} from "react-router-dom"
import { isAuthenticated } from "../../auth/userAuth"
import { readStoreByLinkName } from "./userApi"
import SignupModal from "./SignUpModal"

import {MdShoppingCart,MdStore} from "react-icons/md"
import {FaSignInAlt} from "react-icons/fa"

const UserStoreLayout=({store,children})=>{

  const theme="#00334E"

  const topNav=()=>(
    <div>
        <nav className="navbar navbar-default navbar-expand " style={{backgroundColor:`${theme}`,maxWidth:"100vw"}} >                  
         <Link className="navbar-brand" to={`/${store.linkName}`}><span className="p-3  rounded" style={{marginRight:"5px",backgroundColor:"#004d75"}}><MdStore className="h1 text-light " /></span><span className="text-light h4 ">{store.businessName}</span></Link>  
          <ul className="nav nav-tabs ms-auto  d-none d-md-flex">
          <li className="nav-item "><Link to={`/${store.linkName}/cart`} className="nav-link text-light"><MdShoppingCart/>Cart</Link></li>
          <li className="nav-item "><SignupModal /></li>

          </ul>                       
        </nav>
    </div>
)

   const footer=()=>(
     <div>
        <p className="text-center text-light">Powered By Bizzence</p>
     </div>
   )
    return(
        <div style={{height:"100vh"}}  className="overflow-auto">
          
           <div className="fixed-top">{topNav()}</div>
           <div className="">{topNav()}</div>
           <div className="" style={{minHeight:"80vh"}}>{children}</div>
           <div style={{height:"30vh", backgroundColor:`${theme}`}}>{footer()}</div>
        </div>
    )
}

export default UserStoreLayout