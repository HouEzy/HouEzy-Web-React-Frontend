import React,{useState,useEffect} from "react"
import {Link } from "react-router-dom"
import UserLayout from "../core/userCore/UserLayout"
import UserStoreLayout from "../core/userCore/UserStoreLayout"
const OrderSuccess=()=>{
    
    return(
        <div className="overflow-auto" style={{height:"100vh"}}>
            <>
                <div className="col-12 col-md-8 mx-auto text-center">
                <div className="col-6 col-md-4 mx-auto"><img className="rounded" src="/images/order-successfull.jpg" height="100%" width="100%"></img></div>
                <h1 className=" text-success">Order Placed Successfully !!</h1>
                <p className="lead">It will be Reaching you in Some Time.</p>
                <Link to="/"><button className="btn btn-warning">Back To Home</button></Link>
                </div>
            </>
        </div>

    )
}

export default OrderSuccess