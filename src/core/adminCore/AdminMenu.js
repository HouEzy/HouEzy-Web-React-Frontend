import React from "react"
import {Link,withRouter} from "react-router-dom"
import {signout} from "../../auth/adminAuth"

const AdminMenu=()=>(
    <div className=" ">
            <div className="row">
               <div className="col">
                   <nav className="navbar navbar-expand nav-primary">
                       <Link className="navbar-brand " to="/"><h1 className="text-dark">HouEzy</h1></Link>
                       <ul className="navbar-nav ms-auto">
                           <li className="nav-item">
                              <Link className="nav-link text-dark" to="/admin/signup">Signup</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link text-dark" to="/admin/signin">Dashboard</Link>
                           </li>
                           <li className="nav-item">
                              <span className="nav-link text-dark" onClick={()=>signout()}>Signout</span>
                           </li>
                       </ul>
                       
                       
                      
                       
                    </nav>
               </div>
               
            </div>
        </div>
)

export default AdminMenu;