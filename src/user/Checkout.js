import React,{useState,useEffect} from "react"
import {Link, Redirect } from "react-router-dom"
import UserLayout from "../core/userCore/UserLayout"

import ProductImages from "../core/userCore/ProductImage"
import {Accordion,Card} from "react-bootstrap"
import {readStoreByLinkName,getCart,razorpayorder,createOrder,emptyCart} from "../core/userCore/userApi"
import {isAuthenticated} from "../auth/userAuth"

import {FaChevronCircleDown} from "react-icons/fa"

const CheckoutPage=(props)=>{
    
   
    const [address,setAddress]=useState("")
    const [paymentOption,setPaymentOption]=useState("")
    const [items,setItems]=useState([])
    const [redirectToSuccess,setRedirectToSuccess]=useState(false)
    const [error,setError]=useState([])

    const userId = isAuthenticated() && isAuthenticated().loggedInMember._id;
    const token = isAuthenticated() && isAuthenticated().token;


    let orderProducts=[]

    

    const handleAddress=event=>{
       
        setError("")
        setAddress(event.target.value)
    }
    const handlePaymentOption=event=>{
        setError("")
        setPaymentOption(event.target.value)
    }

    const loadCartItems=(userId)=>{
        getCart(userId).then(data=>{
            if(data.error)
            {console.log(data.error);}
            else{
                console.log(data);
                setItems(data)}
        })
     }

     const getCartTotal=()=>{
        let total=0
        items.map((item,i)=>{
            total=total+item.count*item.productId.mrp
        })
        return total
    }

    const clickCheckout=(event)=>{
        event.preventDefault()
        if(address && paymentOption)
        {
            items.map((item,i)=>{
                const productObject={
                    product:item.productId._id,
                    name:item.productId.name,
                    mrp:item.productId.mrp,
                    count:item.count
                }
    
                orderProducts.push(productObject)
            })
            console.log(orderProducts);
            displayRazorpay()
        }
        else{
            setError("Please select Address and Payment Mode")
        }
    }
   

    useEffect(()=>{
       // const storeLinkName=props.match.params.storeLinkName;
       // loadStoreByLink(storeLinkName)

        if(isAuthenticated())
        {
            const userId=isAuthenticated().loggedInMember._id                  
            loadCartItems(userId)
            setError("")
        }
     },[props])

    const showAddAddress=()=>(
        <div className="form-group mb-3">
            <label className="text-muted">Delivery Address (House No, Street, Society, Area, Landmark, City , Pincode.) </label>
           <textarea
              onChange={handleAddress}
              className="form-control"
              value={address}
              placeholder="House No , Street , Area , Landmark , City , Pincode"
            />
        </div>
    )

    const showPaymentOptions=()=>(
        <div onChange={handlePaymentOption} className="h6">
        <input className="" type="radio" value="upi" name="paymentOption" /> UPI (Gpay,PhonePay,Paytm etc)
        <br/>
        <hr/>
        <input type="radio" value="card" name="paymentOption" /> Debit / Credit Cards
        <br/>
        <hr/>
        <input type="radio" value="cod" name="paymentOption" /> Cash On Delivery
      </div>
    )

    const cartProductCard=(item)=>(
        <div className="card ">
          <Link to={`/product/${item.productId._id}`}  className="text-decoration-none text-dark">
          
           <div className="row">
               <div className="col-3  my-auto">
               <ProductImages  product={item.productId} className="" />
               </div>
               <div className="col-7  my-auto">
              
                <div className="card-body m-0 "> 
                    <p className="m-0">{item.productId.name}</p> 
                    <p className=" m-0">₹{item.productId.mrp} <del>(₹{item.productId.mrp + item.productId.mrp *(50/100)})</del> </p>
                    <p>Qty : {item.count}</p>
                    
                </div>
               
            </div>
               </div>
          </Link> 
       </div>
    )

    const showCartProducts=()=>(
        <div >           
            <div className="overflow-auto" style={{height:"30vh"}} >          
            {items.length>0?
            items.map((item,i)=>(
                <div className="col-12 col-md-8 mx-auto">{cartProductCard(item)}</div>
            )):
            (<div className="h3 mx-auto text-muted">Your Cart is Empty</div>)}
           
            </div>
        </div>
    )

    const showCartSummaryAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="1">
               <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info">
                     Confirm Your Cart<FaChevronCircleDown className="" />  <Link to="/cart" className="btn btn-sm btn-warning float-right">Edit Cart</Link>
                  </Accordion.Toggle>
                   <Accordion.Collapse eventKey="0">
                  <Card.Body>{showCartProducts()}</Card.Body>
                  </Accordion.Collapse>
               </Card>
                 
             </Accordion>
        </div>
    )

    const showAddressAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="0">
               <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info">
                     Set Delivery Address <FaChevronCircleDown className="" />
                  </Accordion.Toggle>
                   <Accordion.Collapse eventKey="0">
                  <Card.Body>{showAddAddress()}</Card.Body>
                  </Accordion.Collapse>
               </Card>
                 
             </Accordion>
        </div>
    )

    const showPaymentOptionAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="1">
               <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info">
                     Select Payment Option <FaChevronCircleDown className="" />
                  </Accordion.Toggle>
                   <Accordion.Collapse eventKey="0">
                  <Card.Body>{showPaymentOptions()}</Card.Body>
                  </Accordion.Collapse>
               </Card>
                 
             </Accordion>
        </div>
    )

    const showCheckout=()=>{
        return isAuthenticated() ? (
            <div className="col-12 ">
                <button className="btn btn-info btn-lg btn-block " onClick={clickCheckout} >Place Order</button>
            </div>
            
        ):(
            <Link to="/user/signin">
               <div>
               <button className="btn btn-primary animate__animated animate__fadeInDown">
                    Sign In to Checkout
                </button>
               </div>
            </Link>
        ) 

    }

    const showCartSummary=()=>(
        <div className="col-12 col-md-7 mx-auto ">
            <div className="card shadow-lg" style={{height:""}}>
                <div className="card-header h5 bg-info">Payment Summary</div>
                <div className="card-body ">
                    <p className="m-0">Product Total : ₹ {getCartTotal()}</p>
                    <p className="m-0">Delivery Charges :₹ 20</p>
                    <hr/>
                    <p className="h6 m-0">Total : ₹ {getCartTotal()+20}</p>
                    <hr />
                    <div>
                        {showCheckout()}
                    </div>
                </div>

            </div>
        </div>
    )
    const showError=()=>(
        <div className="alert alert-danger" style={{display:error ? "":"none"}}>
              {error}
        </div>
  )

    //...........................................

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
        
    const __DEV__ = document.domain === 'localhost' ||"https://9ae214386af8.ngrok.io"
    
    
        async function displayRazorpay()
        {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
            
            const cartdata={
                cartTotal:getCartTotal()
            }
            console.log(cartdata);
         
         
            const data=await razorpayorder(cartdata)
             console.log("data :",data);
               
            const options = {
                key: __DEV__ ? "rzp_test_nQGX8INjf9UFfr" : 'PRODUCTION_KEY',
                currency: data.currency,
                amount: data.amount.toString(),
                order_id: data.id,
                name: 'HouEzy',
                description: 'Thank You for shopping with us.Please Visit Again',
                image: 'images/HouEzy-logo.png',
                handler: function (response) {
                     
                    const createOrderData={
                        products:orderProducts,
                        transaction_id:response.razorpay_payment_id,
                        amount:(data.amount)/100,
                        address:address,
                        city:"Aurangabad",
                        store:items[0].storeId,
                        user:isAuthenticated().loggedInMember._id
                    }

                    createOrder(userId,createOrderData)
                    
                    emptyCart(userId)
                    setRedirectToSuccess(true)
                },
                prefill: {
                    name:"Khush Agrawal",
                    phone_number:`${isAuthenticated().loggedInMember.phoneNo}`,
                   
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }


    //...........................................

    const redirectUserToSuccess=()=>{
        if(redirectToSuccess)
        {
          return <Redirect to="/order/success"/> 
        }
    }

    return(
        
        <div className="overflow-auto" style={{height:"100vh"}}>
           <UserLayout >
           <div className="row mt-md-5">
            {showError()}
           <div className="card col-12 col-md-5 p-4 overflow-auto" style={{height:"60vh"}}>
           {showCartSummaryAccordion()}
           <br/>
           {showAddressAccordion()}
           <br/>
           {showPaymentOptionAccordion()}
           </div>
           <div className="col-12 col-md-7 mx-auto text-center">
            {showCartSummary()}
           </div>
           {redirectUserToSuccess()}
           </div>
          
           
           </UserLayout>
        </div>
        
    )
}

export  {CheckoutPage}