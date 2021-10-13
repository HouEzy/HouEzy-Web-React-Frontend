import React,{useState} from "react"
import {Redirect} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import {signin,authenticate} from "../auth/storeAuth"

const StoreSignin=()=>{


    const theme="#00334E"

    const [values,setValues]=useState({
        email:"",
        password:"",
        phoneNo:"",
        error:"",
        loading:false,
        redirectToReferrer:false
     })
  
     const {email,password,phoneNo,loading,error,redirectToReferrer}=values
  
  
     const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }
  
    const clickSubmit=(event)=>{
       event.preventDefault()
  
       signin({phoneNo,password})
       .then(data=>{
        if(data.error)
        {
              setValues({...values,error:data.error,loading:false})
        }
        else
        {
            authenticate(data,()=>{
                setValues({
                    ...values,
                   redirectToReferrer:true
                    
              })
            })  
        }
       })
    }

    const intro=()=>(
      <div className="p-0">
        <h1 style={{color:`${theme}`}} className="p-2 font-weight-bold">Bizznect</h1>
        <p  style={{color:`${theme}`}} className="h4">Get Back To Your Store.!</p>
        <hr/>
        <p  style={{color:"#0a1931"}} className="h4">Log In</p>
        <hr/>
      </div>
    )

    const signinForm=()=>(
        <form >
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

        <div className="form-group">
          <label className="text-muted"> Password : </label>
          <input
            type="password"
            className="form-control-lg col-12"
            onChange={handleChange("password")}
            value={password}
          />
        </div>

           <button onClick={clickSubmit} className=" col-12 btn btn-lg btn-block mt-3 text-light" style={{backgroundColor:`${theme}`}}>Log In as Store</button>
        </form>
     )

     const showError=()=>(
        <div className="alert alert-danger" style={{display:error ? "":"none"}}>
              {error}
        </div>
     )
     const showLoading  =()=>
       loading && (
       <div className="alert alert-info"><h2>Loading...</h2></div>
       )
     const redirectUser=()=>{
        if(redirectToReferrer)
        {
          return <Redirect to="/store/dashboard"/> 
        }
     }

     return(
        <div style={{height:"100vh",backgroundColor:"#19475f"}} className="d-flex align-items-center">
            
           <div className="container-fluid bg-white col-11 col-lg-4  shadow p-2 p-lg-5  align-middle " style={{borderRadius:"30px"}}>
           {showLoading()}
           {showError()}
           <div className="" >{signinForm()}</div>
           {redirectUser()}
           
           </div>
           
       
        </div>
  
     )
}
export default StoreSignin;

