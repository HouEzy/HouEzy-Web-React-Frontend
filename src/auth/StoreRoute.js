import React, {Component,useState,useEffect} from "react";
import {Route,Redirect} from "react-router-dom"
import {isAuthenticated} from "./storeAuth";
import moment from "moment"
import {getSubById} from "../core/storeCore/storeApi"
const days=()=>{
    
}



const StoreRoute = ({props,component:Component,...rest})=>{


    const [subStatus,setSubStatus]=useState("")
    
    const loadSubDetails=()=>{
        getSubById(isAuthenticated().loggedInMember.rzpSubId).then(data=>{
            console.log(data.status);
           setSubStatus(data.status)
        })
    }
    
    useEffect(()=>{
      loadSubDetails()
    },[props])

    return(
    <Route {...rest} render={props => !isAuthenticated() || isAuthenticated().loggedInMember.role != "Store" ?(
         <Redirect 
        to={{
            pathname:"/store/signin",
            state:{from:props.location}
        }}/>
    ):(isAuthenticated() && isAuthenticated().loggedInMember.role== "Store" && moment().diff(isAuthenticated().loggedInMember.createdAt,"days")<=1000)?
    (
        <Component {...props} />
    ):(<Redirect 
        to={{
            pathname:"/store/pricing",
            state:{from:props.location}
        }}/>)} />
)}





export default StoreRoute;