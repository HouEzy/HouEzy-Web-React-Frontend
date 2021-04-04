import React from "react"
import {Link,withRouter} from "react-router-dom"


const UserMenu=()=>(
   
        <div className="container-fluid ">
            <div className="row">
               <div className="col">
                   <nav className="navbar navbar-expand nav-primary">
                       <Link className="navbar-brand " to="/"><h1 className="text-dark">HouEzy</h1></Link>
                       <ul className="navbar-nav ms-auto">
                           <li className="nav-item">
                              <Link className="nav-link text-dark" to="/user/signin">SignIn</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link text-dark" to="">Cart</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link text-dark" to="">Account</Link>
                           </li>
                       </ul>
                       
                       
                      
                       
                    </nav>
               </div>
               
            </div>
        </div>
    

    
)

export default UserMenu;

<ul className="nav nav-tabs bg-primary">
<li className="nav-item">
    <Link className="nav-link text-warning" to="/">
        Home
    </Link>
</li>
<li className="nav-item">
    <Link className="nav-link"  to="/user/signup">
        SignUp
    </Link>
</li>
<li className="nav-item">
    <Link className="nav-link"  to="/user/signin">
        SignIn
    </Link>
</li>
</ul>