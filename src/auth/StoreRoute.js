import React, {Component} from "react";
import {Route,Redirect} from "react-router-dom"
import {isAuthenticated} from "./storeAuth";
import moment from "moment"

const days=()=>{
    
}



const StoreRoute = ({component:Component,...rest})=>{
   
    return(
    <Route {...rest} render={props => !isAuthenticated() || isAuthenticated().loggedInMember.role != "Store" ?(
         <Redirect 
        to={{
            pathname:"/store/signin",
            state:{from:props.location}
        }}/>
    ):(isAuthenticated() && isAuthenticated().loggedInMember.role== "Store" && moment().diff(isAuthenticated().loggedInMember.createdAt,"days")<=50)?
    (
        <Component {...props} />
    ):(<Redirect 
        to={{
            pathname:"/store/pricing",
            state:{from:props.location}
        }}/>)} />
)}





export default StoreRoute;