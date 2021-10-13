import React,{useState} from "react"
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
import moment from "moment"
import {signout,isAuthenticated} from "../auth/storeAuth"
import { uniqueNamesGenerator, NumberDictionary } from 'unique-names-generator';


const StoreDashboard=()=>{

    const navshow=()=>(
        <div style={{height:"80px"}} className="d-lg-none"></div>
    )

    const headline=()=>(
        <nav className="navbar navbar-default  navbar-expand nav-primary ml-2 bg-transparent shadow-lg  " style={{zIndex:"-1"}}>
                     
                     <Link className="navbar-brand " to="/"><h4 className="text-dark" style={{zIndex:"0"}}>DashBoard</h4></Link>
                                          
                     <ul className="navbar-nav ms-auto">
                       
                         
                     </ul>                                         
        </nav>
    )



    const shareCard=()=>(
        <div className="card shadow-lg rounded">
            <div className="card-header" style={{backgroundColor:"#082032"}}><p className="h3 text-light">Share Your Store.</p></div>
            <div className="card-body">
               <p className="text-muted h6"> Customers can view your Online Store at below given link. .</p>
                <br/>
                <div className="row">
                <p className="col-12 col-md-9">
               <Link target={"_blank"} to={`/${isAuthenticated().loggedInMember.linkName}`} className="h6 border p-1">http://BizzCase.in/{isAuthenticated().loggedInMember.linkName}</Link>
               </p>
               <div className="col-6 col-md-3"><button onClick={() => {navigator.clipboard.writeText(`http://BizzCase.in/${isAuthenticated().loggedInMember.linkName}`)}} className="btn btn-sm btn-primary ">Copy Link</button></div>
                </div>
               
            </div>
        </div>
    )

    const StoreSummary=()=>(
        <div>
           <div className="col-12 row">
              <div className="col card  text-center" style={{height:"120px"}}>Orders</div>
              <div className="col card text-center" style={{height:"120px"}}>Sales</div>
              <div className="col card  text-center" style={{height:"120px"}}>Products</div>

           </div>
        </div>
    )

    const activeOrders=()=>(
        <div className="col-12 card" style={{height:"300px"}}>
            
        </div>
    )

    const salesGraph=()=>(
        <div className="col-12 card" style={{height:"300px"}}>

        </div>
    )

    
    
    return(
       <div >
            <StoreLayout title="Dashboard" description="You Can Manage Your Store From Here.">
               <div className="container-fluid col-12 p-0">
               <Helmet>
               <title>Dashboard | Bizznect</title>
               <meta name="Bizznect Pricing" content="View different Pricing plans to Sky Rocket your Buissness Digitally. " />
               </Helmet>
               <div className="container-fluid col-12 p-0">
                 {navshow()}
                 {headline()}
                 <div className="mt-3 col-12 col-md-8 mx-auto">{shareCard()}</div>
                 <br/>
                 <br/>
                 <div>{StoreSummary()}</div>
                 <br/>
                 <br/>
                 <div className="row">
                     <div className="col-12 col-md-6">{activeOrders()}</div>
                     <div className="col-12 col-md-6">{salesGraph()}</div>

                 </div>
               </div>
               </div>
           </StoreLayout>
       </div>
    )
}
export default StoreDashboard;