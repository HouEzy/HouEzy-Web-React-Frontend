import React,{useState,useEffect} from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

import StoreRoute from "./auth/StoreRoute"
import AdminRoute from "./auth/AdminRoute"

import UserSignup from "./user/UserSignup"
import UserSignin from "./user/UserSignin"
import AdminSignup from "./admin/AdminSignup"
import AdminSignin from "./admin/AdminSignin"
import Home from "./core/userCore/Home"
import StoreSignup from "./store/StoreSignup"
import StoreSignin from "./store/StoreSignin"
import StoreHome  from "./store/StoreHome"
import StorePricing from "./store/StorePricing"
import StoreDashboard from "./store/StoreDashboard"
import AdminDashboard from "./admin/AdminDashboard"
import AdminStores from "./admin/AdminStores"
import Store from "./user/Store"
import StoreCollections from "./store/StoreCollections"
import StoreProducts from "./store/StoreProducts2"
import Product from "./store/Product"
import StoreOrders from "./store/StoreOrders"
import OrderDetails from "./store/OrderDetails"
import StoreProfile from "./store/StoreProfile"

import AllStores from "./user/AllStores"
import CategoryStores from "./user/CategoryStores"
import UserProduct from "./user/Product"
import Cart from "./user/Cart"
import {CheckoutPage} from "./user/Checkout"
import CheckoutUser from "./user/CheckoutUser"
import UserStoreSearchResult from "./user/SearchResult"
import OrderSuccessPage from "./user/OrderSuccess"
import AbouUs from "./user/AboutUs"
import AboutUs from "./user/AboutUs"
import DigitalDukaan from "./user/DigitalDukaan"




const Routes= ()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
       <BrowserRouter>           
            <Switch>
                <Route path="/" exact component={StoreHome}></Route>
                <Route path="/store/pricing" exact component={StorePricing}></Route>
                <Route path="/store/signup" exact component={StoreSignup}></Route>

                <Route path="/user/signup" exact component={UserSignup}></Route>
                <Route path="/user/signin" exact component={UserSignin}></Route>
                <Route path="/admin/signup" exact component={AdminSignup}></Route>
                <Route path="/admin/signin" exact component={AdminSignin}></Route>
                <Route path="/store/signin" exact component={StoreSignin}></Route>
                <StoreRoute path="/store/dashboard" exact component={StoreDashboard}></StoreRoute>
                <StoreRoute path="/store/collections" exact component={StoreCollections}></StoreRoute>
                <StoreRoute path="/store/products" exact component={StoreProducts}></StoreRoute>
                <StoreRoute path="/store/product/:productId" exact component={Product}></StoreRoute>
                <StoreRoute path="/store/orders" exact component={StoreOrders}></StoreRoute>
                <StoreRoute path="/store/orders/:orderId" exact component={OrderDetails}></StoreRoute>
                <StoreRoute path="/store/account" exact component={StoreProfile}></StoreRoute>


                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}></AdminRoute>
                <AdminRoute path="/admin/stores" exact component={AdminStores}></AdminRoute>
                <Route path="/store/:storeId" exact component={Store}></Route>
                <Route path="/:storeLinkName" exact component={DigitalDukaan}></Route>
                <Route path="/store/sign/up" exact component= {StoreSignup}></Route>
                {//User
                }
                
                <Route path="/stores/all" exact component={AllStores}></Route>
                <Route path="/search/stores/:key" exact component={UserStoreSearchResult}></Route>
                <Route path="/stores/:categoryId" exact component={CategoryStores}></Route>
                <Route path="/product/:productId" exact component={UserProduct}></Route>
                <Route path="/name/checkout" exact component={CheckoutPage}></Route>
                <Route path="/:storeLinkName/cart" exact component={Cart}></Route>
                <Route path="/:storeLinkName/checkout" exact component={CheckoutUser}></Route>
                <Route path="/order/success" exact component={OrderSuccessPage}></Route>
                <Route path="/aboutus" exact component={AboutUs}></Route>


            </Switch>
       </BrowserRouter>
    )
}

export default Routes;