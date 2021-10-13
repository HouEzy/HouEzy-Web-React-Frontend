import React,{useState,useEffect} from "react"
import {Link,Redirect} from "react-router-dom"
import {API} from "../config";
import {Helmet} from "react-helmet"

import {FaHandPointRight} from "react-icons/fa"
import { createSubscription,listOrdersByStore,verifySub,updateStoreSubDetails,getSubById } from "../core/storeCore/storeApi"
import { isAuthenticated ,authenticate} from "../auth/storeAuth"

const StorePricing=(props)=>{

    const theme="#00334E"
    
    const [showSignin,setShowSignin]=useState(false)
    const [redirectToDashboard,setRedirectToDashboard]=useState(false)
    const [showAlreadySubscribed,setShowAlreadySubscribed]=useState(false)
    const [subStatus,setSubStatus]=useState("")

    const planArray=
    [
       {name:"monthly",planId:"plan_I7Nej6BHn2abkL",count:120},
       {name:"quaterly",planId:"plan_I5XFoh6LDVdcSh",count:40},
       {name:"halfYearly",planId:"plan_I5XHEsR33m5dLZ",count:20},
       {name:"yearly",planId:"plan_I5XIpj20kDGnqT",count:10},

    ]

    
    const  clickUpgrade=async (e)=>{
        e.preventDefault()
      
        
       if( isAuthenticated() && isAuthenticated().loggedInMember.role=="Store")
        {
           if(isAuthenticated().loggedInMember.rzpSubId)
           {
             setShowAlreadySubscribed(true)
             console.log("sub status",subStatus);
           }
           else{
               
               displayRazorpay(e.target.value)
           }
                  
        }
        else{
            setShowSignin(true)
        }
    }

    const loadSubStatus=(subId)=>{
       const data= getSubById(subId)
       console.log(data);
       //setSubStatus(data.status)
    }

    useEffect(()=>{

        if(isAuthenticated() && isAuthenticated().loggedInMember.role=="Store" && isAuthenticated().loggedInMember.rzpSubId != "")
        {
            loadSubStatus(isAuthenticated().loggedInMember.rzpSubId)
        }

    },[props])

   
    const topNav=()=>(
        <div className="sticky-top">
             <nav className="navbar navbar-default sticky-top navbar-expand nav-white bg-white shadow-lg p-0 " style={{zIndex:"1"}} >                
                 <Link className="navbar-brand px-1" to="/"><img className="img-fluid rounded p-0" src="/images/BIZZNECT-logo-c.png" width="200px" height="80px"/></Link>                 
                 <ul className="navbar-nav ms-auto">                    
                      <li className="nav-item">
                        <Link className="nav-link text-dark" to="/store/signup">Sign up/In</Link>
                     </li>                     
                 </ul>                                     
            </nav>
        </div>
    )

    const plans=()=>(
        <div className="mt-3">
            <div className="row">
                <div className="col-6 col-md-3 m-0 p-0">
                    <div className="card">
                        <div className="card-header h4 text-center">Monthly Plan</div>
                        <div className="card-body h2 text-center ">₹ 499</div>
                        <div className="card-footer text-center"><button onClick={clickUpgrade} className="btn btn-lg text-light " value={0}  style={{backgroundColor:`${theme}`}}>Upgarde</button></div>
                    </div>
                </div>
                <div className="col-6 col-md-3 m-0 p-0">
                    <div className="card">
                        <div className="card-header h4 text-center">Quaterly Plan</div>
                        <div className="card-body h2 text-center ">₹ 1999</div>
                        <div className="card-footer text-center"><button onClick={clickUpgrade} className="btn btn-lg text-light " value={1}  style={{backgroundColor:`${theme}`}}>Upgarde</button></div>
                    </div>
                </div>

                <div className="col-6 col-md-3 m-0 p-0">
                    <div className="card">
                        <div className="card-header h4 text-center">Half Yearly Plan</div>
                        <div className="card-body h2 text-center">₹ 2999</div>
                        <div className="card-footer text-center"><button onClick={clickUpgrade} className="btn btn-lg text-light " value={2}  style={{backgroundColor:`${theme}`}}>Upgarde</button></div>

                    </div>
                </div>
                <div className="col-6 col-md-3 m-0 p-0">
                    <div className="card">
                        <div className="card-header h4 text-center">Annual Plan</div>
                        <div className="card-body h2 text-center">₹ 4999</div>
                        <div className="card-footer text-center"><button onClick={clickUpgrade} className="btn btn-lg text-light " value={3}  style={{backgroundColor:`${theme}`}}>Upgarde</button></div>

                    </div>
                </div>
            </div>
        </div>
    )

    const featuresList=
    [
    "Digital Dukan" , "Unlimited Collections","Unlimited Products" ,
     "Graphical Dashboard" , "Business Card Designs","Store Banner Designs",
     "Order Managment","Invoice Generator","Business Tools","Unlimited Orders",
      "Marketting Tools"
    ]

    const features=()=>(
        <div className="mt-4 col-10 p-4 mx-auto card shadow-lg " style={{backgroundColor:`${theme}`}}>
            <div className="">
            {featuresList.map((f,i)=>(
                <div className=" d-inline-block col-6 col-md-3 h5 text-light" ><FaHandPointRight /> {f}</div>
            ))}
        </div>
        </div>
    )

    const redirectDash=()=>{
        if(redirectToDashboard)
        {
            return (
                <Redirect to="/store/dashboard" />
            )
        }
    }

    const showSigninAlert=()=>{
        if(showSignin)
        {
            return(
                <div className="alert alert-danger text-center">
                    You need to Sign In before Upgrading.Go to <Link to="/store/signin">Login</Link>
                </div>
            )
        }
    }

    const showAlreadySubscribedAlert=()=>{
        if(showAlreadySubscribed)
        {
            return(
                <div className="alert alert-info text-center h4">
                   You Have already Subscribed to Bizznect. Go to <Link to="/store/dashboard">Dashboard</Link>
                </div>
            )
        }
    }

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
    const __DEV__ = document.domain === 'localhost:3000' ||"https://9ae214386af8.ngrok.io"

    async function displayRazorpay(value)
    {
        
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        

        const subData={
            storeId:isAuthenticated().loggedInMember._id,
            planId:planArray[value].planId,
            count:planArray[value].count
        }

        const subRes=await createSubscription(subData);
        
                         
        const options = {
            key: __DEV__ ? "rzp_test_6SH1wXhmrAYHyt" : 'PRODUCTION KEY',
            subscription_id:subRes.id,
            name: 'Bizznect',
            description: 'Lets Connect Your Store to The Internet',
            image: 'images/',
            handler:async function (response) {
               // alert(response.razorpay_payment_id);
               // alert(response.razorpay_subscription_id);
               // alert(response.razorpay_signature);

                const verifyData={
                    razorpay_sub_id:subRes.id,
                    razorpay_payment_id:response.razorpay_payment_id,
                    razorpay_signature:response.razorpay_signature
                }
                const verifySubRes=await verifySub(verifyData)
                console.log(verifySubRes.signatureIsValid);
                if(verifySubRes.signatureIsValid=="true")
                {
                    updateStoreSubDetails(isAuthenticated().loggedInMember._id,subRes.plan_id,subRes.id).then(data=>{
                        console.log("updated Store",data);
                        const authData={loggedInMember: data}
                        authenticate(authData,()=>{
                            setRedirectToDashboard(true)
                        })
                        
                    })
                }
               /* fetch(`${API}/subscription/verify`,{
                    method:"POST",
                    headers:{
                          Accept:"application/json",
                          "Content-Type":"application/json"
                    },
                    body:JSON.stringify(verifyData)
                })
                .then(async(response)=>{
                    const verifyRes=await response.json()
                    if(verifyRes.signatureIsValid==true)
                    {
                        
                    }
                   
                })
                .catch(err =>{
                    console.log(err);
                }) */

            },
            prefill: {
                name:"Khush Agrawal",
                
                phone_number:`${isAuthenticated().loggedInMember.phoneNo}`,
               
            },
            "theme": {
                "color":`${theme}`
            }
        }
       
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    


    return(
        <div className="overflow-auto" style={{height:"100vh"}}>
         <Helmet>
            <title>Pricing | Bizznect</title>
            <meta name="Bizznect Pricing" content="View different Pricing plans to Sky Rocket your Buissness Digitally. " />
         </Helmet>
          <div>{topNav()}</div>
          
          <div>{features()}</div>
          <br/>
          {redirectDash()}
          {showAlreadySubscribedAlert()}
          {showSigninAlert()}
          <div>{plans()}</div>
         
        </div>
    )
}

export default StorePricing