import React from "react"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import {MdShoppingCart,MdStore,MdPlayArrow,MdShortcut,MdEast} from "react-icons/md"
import {BsArrowRightCircle,BsFillArrowRightSquareFill} from "react-icons/bs"
import {FaArrowCircleRight} from "react-icons/fa"
import { isAuthenticated } from "../auth/storeAuth"

const StoreProfile=()=>{

    const navshow=()=>(
        <div style={{height:"80px"}} className="d-lg-none"></div>
    )

    const headline=()=>(
        <nav className="col-12 navbar navbar-default  navbar-expand  ml-2 bg-transparent shadow-lg p-0 " style={{zIndex:"-1"}}>
                     
                     <Link className="navbar-brand" to="/"><h4 className="text-dark" style={{zIndex:"0"}}>  Account</h4></Link>
                                          
                     <ul className="navbar-nav ms-auto">
                       
                         
                     </ul>                                         
        </nav>
    )

    const AccTab=()=>(
        <nav className="navbar navbar-default navbar-expand bg-transparent">
            <ul className="nav nav-tab">
                <li className="nav-link p-2 ">General</li>
                <li className="nav-item p-2">Store Details</li>
                

            </ul>
        </nav>
    )

    const storeName=()=>(
        <div className=" mt-3 card col-12 col-md-8 mx-auto shadow-lg">
           <div className="row">
               <div className="col-4 col-md-2 ">
                 <div className="h1 text-center bg-secondary rounded p-1" style={{fontSize:"4em"}}><MdStore className="text-light"  /></div>
               </div>
               <div className="col-8 col-md-10 my-auto">
                   <h2>{isAuthenticated().loggedInMember.businessName}</h2>
               </div>

           </div>
        </div>
    )

    const AccMenu=()=>(
        <div className="list-group ">
            <li className="list-group-item p-3 h5">Edit Store Details <span className="ms-auto float-end"><FaArrowCircleRight /></span></li>
            <li className="list-group-item p-3 h5">Subscription Details <span className="ms-auto float-end"><FaArrowCircleRight /></span></li>
            <li className="list-group-item p-3 h5">Delivery Settings <span className="ms-auto float-end"><FaArrowCircleRight /></span></li>
            <li className="list-group-item p-3 h5">Privacy Policy <span className="ms-auto float-end"><FaArrowCircleRight /></span></li>
            <li className="list-group-item p-3 h5">Log Out<span className="ms-auto float-end"><FaArrowCircleRight /></span></li>

        </div>
    )

return(
    <div>
        <StoreLayout>
            <div className="container-fluid col-12 p-0">
                
                {navshow()}
                {headline()}
                <div className="col-12">{storeName()}</div>
                <br/><br/>
                <div>{AccMenu()}</div>
            </div>

        </StoreLayout>
    </div>
)
}

export default StoreProfile;