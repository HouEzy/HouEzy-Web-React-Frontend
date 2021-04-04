import React,{useState} from "react"
import UserLayout from "../core/userCore/UserLayout"
import {signup} from "../auth/userAuth"

const UserSignup=()=>{

      const [values,setValues]=useState({
            name:"",
            email:"",
            phoneNo:"",
            password:"",
            error:"",
            success:false
      })

      const {name,email,phoneNo,password,success,error}=values

      const handleChange=name=>event=>{
          setValues({...values,error:false,[name]:event.target.value})
      }


      const clickSubmit=(event)=>{
            event.preventDefault()
            setValues({...values,error:false})
            signup({name,email,phoneNo,password})
            .then(data=>{
                  if(data.error)
                  {
                        setValues({...values,error:data.error,success:false})
                  }
                  else
                  {
                        setValues({
                              ...values,
                              name:"",
                              email:"",
                              phoneNo:"",
                              password:"",
                              error:"",
                              success:true
                        })
                  }
            })

      }

      const signupForm=()=>(
            <form>
               <div className="form-group">
                     <label className="text-muted">Name</label>
                     <input onChange={handleChange("name")} type="text" className="form-control" value={name} />
               </div>
               <div className="form-group">
                     <label className="text-muted">E-mail</label>
                     <input onChange={handleChange("email")} type="email" className="form-control" value={email} />
               </div>
               <div className="form-group">
                     <label className="text-muted">Phone No</label>
                     <input onChange={handleChange("phoneNo")} type="tel" className="form-control" value={phoneNo} />
               </div>
               <div className="form-group">
                     <label className="text-muted">Password</label>
                     <input onChange={handleChange("password")} type="password" className="form-control" value={password} />
               </div>
               <button onClick={clickSubmit} className="btn btn-primary mt-3 mx-auto">Sign Up</button>
            </form>
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
      
          

      return(
            <UserLayout title="SignUp" description="Create Account">
                  
                  <div className="container-fluid col-8 col-lg-5 shadow p-5">
                  {showSuccess()}
                  {showError()}
                  {signupForm()}
                  </div>
                  
            </UserLayout>
      )
} 


export default UserSignup;