import React,{useState,useEffect} from "react"
import {Link, Redirect } from "react-router-dom"
import {getCart,readStoreByLinkName,razorpayorder,createOrder,emptyCart} from "../core/userCore/userApi"
import UserStoreLayout from "../core/userCore/UserStoreLayout"
import ProductImages from "../core/userCore/ProductImage"
import {Accordion,Card} from "react-bootstrap"
import {isAuthenticated} from "../auth/userAuth"

import {FaChevronCircleDown} from "react-icons/fa"
 

const CheckoutUser=(props)=>{
    
    const [run,setRun]=useState(false)
    const [store,setStore]=useState({})
    const [cartProducts,setCartProducts]=useState([])
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [pinCode,setPinCode]=useState("")
    const [paymentOption,setPaymentOption]=useState("")
    const [redirectToSuccess,setRedirectToSuccess]=useState(false)
    const [error,setError]=useState(false)

    const userId = isAuthenticated() && isAuthenticated().loggedInMember._id;

    let orderProducts=[]

    const loadStoreByLink=(linkName)=>{
        readStoreByLinkName(linkName).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setStore(data)
                console.log(store);
            }
        })
    }

    const handleAddress=event=>{
       
        setError("")
        setAddress(event.target.value)
    }
    const handleName=event=>{
       
        setError("")
        setName(event.target.value)
    }
    const handleCity=event=>{
       
        setError("")
        setCity(event.target.value)
    }
    const handlePinCode=event=>{
       
        setError("")
        setPinCode(event.target.value)
    }
    const handlePaymentOption=event=>{
        setError("")
        setPaymentOption(event.target.value)
    }


    const loadCartProducts=(userId)=>{
        getCart(userId).then(data=>{
            if(data.error)
            {console.log(data.error);}
            else{
                console.log(data);
                setCartProducts(data)}
        })
     }

     const getCartTotal=()=>{
        let total=0
        cartProducts.map((cartProduct,i)=>{
            total=total+cartProduct.count*cartProduct.productId.sellingPrice;
        })
        return total
    }

    const clickCheckout=(event)=>{
        event.preventDefault()
        if(address && paymentOption)
        {
            cartProducts.map((cartProduct,i)=>{
                const productObject={
                    product:cartProduct.productId._id,
                    name:cartProduct.productId.name,
                    mrp:cartProduct.productId.mrp,
                    count:cartProduct.count
                }
    
                orderProducts.push(productObject)
            })
            if(paymentOption==="Cash On Delivery")
            {
                const createOrderData={
                    products:orderProducts,
                    transaction_id:"null",
                    amount:getCartTotal(),
                    customerName:name,
                    address:address,
                    city:city,
                    pincode:pinCode,
                    paymentMethod:paymentOption,
                    store:cartProducts[0].storeId,
                    user:isAuthenticated().loggedInMember._id
                }

                createOrder(userId,createOrderData)
                
                emptyCart(userId)
                setRedirectToSuccess(true)
            }
            else{
                displayRazorpay()
            }
            
        }
        else{
            setError("Please select Address and Payment Mode")
        }
    }
    

    useEffect(()=>{
        const storeLinkName=props.match.params.storeLinkName;
        loadStoreByLink(storeLinkName)
        if(isAuthenticated())
        {
            const userId=isAuthenticated().loggedInMember._id                  
            loadCartProducts(userId)
            
        }
    },[run])


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

    const cartProductCard=(cartProduct)=>(
        <div className="card ">
          <Link to={`/product/${cartProduct.productId._id}`}  className="text-decoration-none text-dark">
          
           <div className="row">
               <div className="col-3  my-auto">
               <ProductImages  product={cartProduct.productId} className="" />
               </div>
               <div className="col-7  my-auto">
              
                <div className="card-body m-0 "> 
                    <p className="m-0">{cartProduct.productId.name}</p> 
                    <p className=" m-0">₹{cartProduct.productId.sellingPrice} <del>(₹{cartProduct.productId.mrp})</del> </p>
                    <p>Qty : {cartProduct.count}</p>
                    
                </div>
               
            </div>
               </div>
          </Link> 
       </div>
    )

    const showCartProducts=()=>(
        <div >           
            <div className="overflow-auto" style={{height:"30vh"}} >          
            {cartProducts.length>0?
            cartProducts.map((cartProduct,i)=>(
                <div className="col-12 col-md-8 mx-auto">{cartProductCard(cartProduct)}</div>
            )):
            (<div className="h3 mx-auto text-muted">Your Cart is Empty</div>)}
           
            </div>
        </div>
    )

    const showCartSummaryAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0" >
                <Accordion.Header  >Check Your Cart</Accordion.Header>
                <Accordion.Body>
                <div >           
                    <div className="overflow-auto" style={{height:"30vh"}} >          
                    {cartProducts.length>0?
                    cartProducts.map((cartProduct,i)=>(
                        <div className="col-12 col-md-8 mx-auto">{cartProductCard(cartProduct)}</div>
                    )):
                    (<div className="h3 mx-auto text-muted">Your Cart is Empty</div>)}
                   
                    </div>
                </div>
                </Accordion.Body>
              </Accordion.Item>
            
            </Accordion>
        </div>
    )

    const showAddressAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Set Delivery Address</Accordion.Header>
                <Accordion.Body>
                <div className="row">
                <div className="col-6 form-group mb-3">
                    <label className="text-muted">Enter Name </label>
                   <input
                      onChange={handleName}
                      className="form-control"
                      value={name}
                      placeholder=""
                    />
                </div>

                <div className="col-6 form-group mb-3">
                    <label className="text-muted">Contact No </label>
                   <input
                      
                      className="form-control"
                      value={`+91 - ${isAuthenticated().loggedInMember.phoneNo}`}
                      placeholder=""
                      readOnly
                    />
                </div>

                </div>
                <div className="form-group mb-3">
                    <label className="text-muted">Delivery Address (House No, Street, Society, Area, Landmark, City , Pincode.) </label>
                   <textarea
                      onChange={handleAddress}
                      className="form-control"
                      value={address}
                      placeholder="House No , Street , Area , Landmark , City , Pincode"
                    />
                </div>

                <div className="row">
                <div className="col-6 form-group mb-3">
                    <label className="text-muted">City </label>
                   <input
                      onChange={handleCity}
                      className="form-control"
                      value={city}
                      placeholder=""
                    />
                </div>

                <div className="col-6 form-group mb-3">
                    <label className="text-muted">pincode </label>
                   <input
                      onChange={handlePinCode}
                      className="form-control"
                      value={pinCode}
                      placeholder=""
                      
                    />
                </div>

                </div>
                </Accordion.Body>
              </Accordion.Item>
            
            </Accordion>
        </div>
    )

    const showPaymentOptionAccordion=()=>(
        <div className="">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Select Payment Option</Accordion.Header>
                <Accordion.Body>
                <div onChange={handlePaymentOption} className="h6">
                  <input className="" type="radio" value="upi" name="paymentOption" /> UPI (Gpay,PhonePay,Paytm etc)
                  <br/>
                  <hr/>
                  <input type="radio" value="card" name="paymentOption" /> Debit / Credit Cards
                  <br/>
                  <hr/>
                  <input type="radio" value="Cash On Delivery" name="paymentOption" /> Cash On Delivery
                </div>
                </Accordion.Body>
              </Accordion.Item>
            
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
        <div className="col-12  mx-auto ">
            <div className="card shadow-lg" style={{height:""}}>
                <div className="card-header h5 text-light" style={{backgroundColor:"#00334E"}}>Payment Summary</div>
                <div className="card-body ">
                    <p className="m-0">Product Total : ₹ {getCartTotal()}</p>
                    <p className="m-0">Delivery Charges :₹ 20</p>
                    <hr/>
                    <p className="h6 m-0">Total : ₹ {getCartTotal() + 20}</p>
                    <hr />
                    <div>
                        {
                            isAuthenticated() ? (
            <div className="col-12 ">
                <button className="btn btn-lg btn-block text-light " onClick={clickCheckout} style={{backgroundColor:"#00334E"}} >Place Order</button>
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

  //..................................................
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
            key: __DEV__ ? "rzp_test_6SH1wXhmrAYHyt" : 'PRODUCTION KEY',
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
                    customerName:name,
                    address:address,
                    city:city,
                    pincode:pinCode,
                    paymentMethod:paymentOption,
                    store:cartProducts[0].storeId,
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

  //..................................................

  const redirectUserToSuccess=()=>{
    if(redirectToSuccess)
    {
      return <Redirect to="/order/success"/> 
    }
}


    return(
        <div >
           <UserStoreLayout store={store} >
             
             <div className="row align-items-center">
             
             <div className="col-12 col-md-7 overflow-auto" style={{height:"60vh"}}>
             {showError()}
             {showCartSummaryAccordion()}
             <hr/>
             {showAddressAccordion()}
             <hr/>
             {showPaymentOptionAccordion()}
             </div>
             <div className="col-12 col-md-5 align-middle">{showCartSummary()}</div>
             </div>
             
             
             <div>
                
             </div>
             {redirectUserToSuccess()}
           </UserStoreLayout>
        </div>
    )
}

export default CheckoutUser;