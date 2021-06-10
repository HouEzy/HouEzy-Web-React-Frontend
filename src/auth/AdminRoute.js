import React, { Component } from "react";
import {Route,Redirect} from "react-router-dom"
import {isAuthenticated} from "./adminAuth";

const AdminRoute = ({component:Component,...rest})=>(
    <Route {...rest} render={props => isAuthenticated() && isAuthenticated().loggedInMember.role === "Admin" ? (
        <Component {...props} />
    ):(
        <Redirect 
        to={{
            pathname:"/admin/signin",
            state:{from:props.location}
        }}/>
    )} />
)

export default AdminRoute;