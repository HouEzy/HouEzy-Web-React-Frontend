import React, { Component } from "react";
import {Route,Redirect} from "react-router-dom"
import {isAuthenticated} from "./storeAuth";

const StoreRoute = ({component:Component,...rest})=>(
    <Route {...rest} render={props => isAuthenticated() && isAuthenticated().loggedInMember.role== "Store" ? (
        <Component {...props} />
    ):(
        <Redirect 
        to={{
            pathname:"/store/signin",
            state:{from:props.location}
        }}/>
    )} />
)

export default StoreRoute;