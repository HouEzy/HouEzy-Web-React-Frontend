import React,{useState,useEffect} from "react";
import {Link } from "react-router-dom"
import {emptyCart} from "./cartHelpers"
import {getProducts,razorpayorder,paymentverification, createOrder} from "./apiCore"
import {isAuthenticated} from "../auth"

const Checkout = ({products})=>{

    const [address,setAddress]=useState("")
  
    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;
    
    const getTotal=()=>{
        return products.reduce((currentValue,nextValue)=>{
            return currentValue+nextValue.count*nextValue.price;
        },0)
    }

    const handleAddress=event=>{
        setAddress(event.target.value)
    }

    const showAddAddress=()=>(
        <div className="form-group mb-3">
            <label className="text-muted">Delivery Address</label>
           <textarea
              onChange={handleAddress}
              className="form-control"
              value={address}
              placeholder="Type Your Delivery Address Here...."
            />
        </div>
    )

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
        
    const __DEV__ = document.domain === 'localhost'
    
    
        async function displayRazorpay()
        {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
            
            const cartdata={
                cartTotal:getTotal()
            }
            console.log(cartdata);
         
         
            const data=await razorpayorder(cartdata)
             console.log("data :",data);
               
            const options = {
                key: __DEV__ ? "rzp_test_nQGX8INjf9UFfr" : 'PRODUCTION_KEY',
                currency: data.currency,
                amount: data.amount.toString(),
                order_id: data.id,
                name: 'Donation',
                description: 'Thank you for nothing. Please give us some money',
                image: 'http://localhost:1337/logo.svg',
                handler: function (response) {
                    
                    alert(response.razorpay_payment_id)
                    alert(response.razorpay_order_id)
                    alert(response.razorpay_signature)
                     console.log("products",products);
                    const createOrderData={
                        products:products,
                        transaction_id:response.razorpay_payment_id,
                        amount:data.amount,
                        address:address
                    }

                    createOrder(userId,token,createOrderData)
                    
                    emptyCart(()=>{
                        console.log("Payment Successfull and CART empty");
                    })
                },
                prefill: {
                    name:"Khush Agrawal",
                    email: 'sdfdsjfh2@ndsfdf.com',
                    phone_number: '9899999999'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }

    const showCheckout=()=>{
        return isAuthenticated() ? (
            <button className="btn btn-success" onClick={displayRazorpay} >Checkout</button>
            
        ):(
            <Link to="/Signin">
                <button className="btn btn-primary animate__animated animate__fadeInDown">
                    Sign In to Checkout
                </button>
            </Link>
        ) 

    }

    return <div>
       <h2>Total:${getTotal()}</h2> 
        {showAddAddress()} 
        {showCheckout()}
    </div>
}

export default Checkout;