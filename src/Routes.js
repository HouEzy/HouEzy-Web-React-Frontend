import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import StoreRoute from "./auth/StoreRoute"
import AdminRoute from "./auth/AdminRoute"

import UserSignup from "./user/UserSignup"
import UserSignin from "./user/UserSignin"
import AdminSignup from "./admin/AdminSignup"
import AdminSignin from "./admin/AdminSignin"
import Home from "./core/userCore/Home"
import StoreSignup from "./store/StoreSignup"
import StoreSignin from "./store/StoreSignin"
import StoreDashboard from "./store/StoreDashboard"
import AdminDashboard from "./admin/AdminDashboard"
import AdminStores from "./admin/AdminStores"




const Routes= ()=>{
    return (
       <BrowserRouter>
            
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/user/signup" exact component={UserSignup}></Route>
                <Route path="/user/signin" exact component={UserSignin}></Route>
                <Route path="/admin/signup" exact component={AdminSignup}></Route>
                <Route path="/admin/signin" exact component={AdminSignin}></Route>
                <Route path="/store/signup" exact component={StoreSignup}></Route>
                <Route path="/store/signin" exact component={StoreSignin}></Route>
                <StoreRoute path="/store/dashboard" exact component={StoreDashboard}></StoreRoute>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}></AdminRoute>
                <AdminRoute path="/admin/stores" exact component={AdminStores}></AdminRoute>

            </Switch>
       </BrowserRouter>
    )
}

export default Routes;