import React,{useState,useEffect} from "react"
import {Link ,Redirect} from "react-router-dom"
import csc from 'country-state-city'
import {signup,sendOtp,verifyOtp,authenticate} from "../auth/storeAuth"
import {listCategories} from "../core/storeCore/storeApi"
import {Dropdown} from "react-bootstrap"
import { uniqueNamesGenerator, NumberDictionary } from 'unique-names-generator';



const StoreSignup=()=>{ 

  const theme="#00334E"


  const cities=csc.getCitiesOfCountry("IN")
  let optionCities = cities.map((city) =>
        <option value={city.name} >{city.name}</option>
    );

   
  

  const [values, setValues] = useState({
    name:"",
    email:"",
    phoneNo:"",
    otp:"",
    password:"",
    confirmPassword:"",
    businessName:"",
    city:"",
    category:"",
    address:"",
    openTime:"",
    closeTime:"",
    redirect:false,
    error:"",
    success:false,
    redirectToDashboard:false
  })
  
  const {name,email,phoneNo,otp,password,confirmPassword,businessName,city,category,address,openTime,closeTime,error,success,redirectToDashboard}=values

  const [count, setCount] = useState(1)
  const [categories,setCategories]=useState([]);
  const [linkName,setLinkName]=useState("")

  const getCategories=()=>{
    listCategories().then(data=>{               
            setCategories(data)           
    })
 }

 useEffect(()=>{
  getCategories();
  
 },[])

 let optionCategory = categories && categories.map((category) =>
 <option value={category._id} >{category.name}</option>
);

  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const handleSendOtp=(event)=>{
   event.preventDefault()
   if(phoneNo.length===10)
   {
    sendOtp(phoneNo).then(data=>{
      setCount(count + 1)
     })
   }
   else
   {
    setValues({...values,error:"Please Enter Valid Phone Number",success:false})

   }
}

const handleVerifyOtp=(event)=>{
  event.preventDefault()
  if(otp.length===4)
  {
    verifyOtp(phoneNo,otp).then(data=>{
      if(data.data.status==="approved")
      {
       setCount(count + 1)
      }
      else{
       setValues({...values,error:"Otp Not Verified !!",success:false})
   
      }
     })
  }
  else
  {
    setValues({...values,error:"OTP must be of 4 digits",success:false})

  }
}

const clickSubmit=(event)=>{
  event.preventDefault()
  
  
  const collectiveBusinessName=businessName.replace(/\s/g, "")
  const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
  const uniqueString= uniqueNamesGenerator({
  dictionaries: [[collectiveBusinessName], numberDictionary],
  length: 2,
  separator: '',
  style: ''
  });
  console.log(uniqueString);
  setLinkName(uniqueString)

  if(password === confirmPassword)
  {
    setValues({...values,error:false})

  console.log("LinkName :",linkName);
  
    signup({name,email,phoneNo,linkName:uniqueString,password,businessName,city,category})
    .then(data=>{
          if(data.error)
          {
                setValues({...values,error:data.error,success:false})
          }
          else
          {
             authenticate(data,() =>{
              setValues({
                ...values,
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
                businessName:"",
                city:"",
                category:"",
                address:"",
                openTime:"",
                closeTime:"",
                phoneNo:"",
                otp:"",
                error:"",
                redirectToDashboard:true,
                success:true
          })
             })
          }
    })
  }
  else{
    setValues({...values,error:"Password does not match with Confirm Password !! Please try again.",success:false})

  }
 
}

const intro=()=>(
  <div className="p-0">
    <h1 style={{color:`${theme}`}} className="p-2">BIZZNECT</h1>
    <p  style={{color:`${theme}`}} className="h4">Get Started with 28 day free trial.</p>
    <hr/>
  </div>
)
    
const signupForm=()=>(
  <div>
    <div>
     
     <form>
     {count === 1 ? (
       <div>
       
       {intro()}
       
       <div className="form-group">
         <label className="text-muted">Phone Number</label>
         <div className="input-group">
           <div className="input-group-prepend my-auto" >
              <span className="input-group-text text-light" style={{backgroundColor:`${theme}`}}>+91</span>
           </div>
         <input
           type="tel"
           className="col-10 form-control-lg"
           onChange={handleChange("phoneNo")}
           value={phoneNo}
           placeholder="Enter your Mobile Number."
           required
         />
         </div>
        
       </div>
       <div className="">
         <button onClick={handleSendOtp} className=" mt-3 col-12 btn btn-lg btn-block text-light" disabled={!phoneNo} style={{backgroundColor:`${theme}`}}>Get Started</button>
       </div>
       <hr />
       <p className="text-center">Already Have an Account ? <Link to="/store/signin">LogIn</Link></p>
      
       </div>
       
     ) : null}
     {count===2 ? (
       <div>
       {intro()}
       <div className="form-group">
         <label className="text-muted">Enter 4 digit Otp</label>
         <input
           type="number"
           className=" col-12 form-control-lg"
           onChange={handleChange("otp")}
           value={otp}
           required
         />
       </div>
       <div className="">
         <button onClick={handleVerifyOtp} className="col-12 mt-3 btn btn-primary btn-lg btn-block" style={{backgroundColor:`${theme}`}}>Verify OTP</button>
       </div>
       </div>
     ): null}
     {count === 3 ? (
       <div>
       {intro()}
       <h3 className="text-center text-muted">Please help us know you better.</h3>
       <div className="form-group">
         <label className="text-muted">Business Name</label>
         <input
           type="text"
           className="form-control-lg col-12"
           onChange={handleChange("businessName")}
           value={businessName}
         />
       </div>
       
          
      <div className="">
      <div className="col">
           <div className="form-group">
             <label className="text-muted">Category</label>
             <select  className="form-select col-12" onChange={handleChange("category")} value={category}>
             <option >Open this select menu</option>
            {optionCategory}
            
             </select> 
           </div>
        </div>
        <div className="col">
           <div className="form-group">
             <label className="text-muted">City</label>
             <select className="form-select col-12" aria-label="Default select example" onChange={handleChange("city")} value={city}>
             <option selected>Open this select menu</option>
             <option value="Aurangabad">Aurangabad</option>
             {optionCities}
            
             </select>
           </div>
        </div>
        
      </div>

      <div className="form-group">
         <label className="text-muted">Email : </label>
         <input
           type="email"
           className="form-control col-12"
           onChange={handleChange("email")}
           value={email}
         />
       </div>

      <div className="form-group">
         <label className="text-muted">Set Password : </label>
         <input
           type="password"
           className="form-control col-12"
           onChange={handleChange("password")}
           value={password}
         />
       </div>

       <div className="form-group">
         <label className="text-muted">Confirm Password : </label>
         <input
           type="password"
           className="form-control col-12"
           onChange={handleChange("confirmPassword")}
           value={confirmPassword}
         />
       </div>


       </div>
     ) : null}
     
     {count === 3? (
       <div className="text-center">
       <button onClick={clickSubmit} className="mt-3 btn btn-block btn-lg text-light" style={{backgroundColor:`${theme}`}}>
         Submit
       </button>
       </div>
     ) : null} 
   </form>
   
   </div>
  </div>
)

    

    const showError=()=>(
      <div className="alert alert-danger" style={{display:error ? "":"none"}}>
            {error}
      </div>
       )
      const showSuccess  =()=>(
      <div className="alert alert-info" style={{display:success ? "":"none"}}>
           New Account is Created. Please Sign In.
      </div>
)

const redirectUser=()=>{
  if(redirectToDashboard)
  {
    return <Redirect to="/store/dashboard"/> 
  }
}

    return (
        
            <div style={{height:"100vh",backgroundColor:"#19475f"}} className="d-flex align-items-center overflow-auto">
            <br/>
            <br/>
            <div className=" mt-3 bg-white container-fluid col-11 col-lg-4  shadow p-2 p-lg-5  align-middle  " style={{borderRadius:"30px"}}>
                  {showError()}
                  {showSuccess()}                 
                  {signupForm()}
                  {redirectUser()}
             </div>
             
            </div>
        
    )
}

export default StoreSignup;

