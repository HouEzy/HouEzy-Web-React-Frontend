import React,{useState} from "react"
import {Redirect} from "react-router-dom"
import UserLayout from "../core/userCore/UserLayout"
import {signin} from "../auth/userAuth"


const UserSignin=()=>{

   const [values,setValues]=useState({
      email:"",
      password:"",
      error:"",
      loading:false,
      redirectToReferrer:false
   })

   const {email,password,loading,error,redirectToReferrer}=values


   const handleChange=name=>event=>{
      setValues({...values,error:false,[name]:event.target.value})
  }

  const clickSubmit=(event)=>{
     event.preventDefault()

     signin({email,password})
     .then(data=>{
      if(data.error)
      {
            setValues({...values,error:data.error,loading:false})
      }
      else
      {
            setValues({
                  ...values,
                 redirectToReferrer:true
                  
            })
      }
     })
  }


   const signinForm=()=>(
      <form>
         <div className="form-group">
            <label className="text-muted">E-mail</label>
            <input onChange={handleChange("email")} type="email"  className="form-control" value={email} />
         </div>
         <div className="form-group">
            <label className="text-muted">Password:</label>
            <input onChange={handleChange("password")} type="password"  className="form-control" value={password} />
         </div>
         <button onClick={clickSubmit} className="btn btn-primary mt-2">Log In</button>
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
        return <Redirect to="/"/> 
      }
   }

   return(
      <UserLayout title="SignIn" description="Log Into Your Account">
         <div className="container col-8 col-lg-3 shadow p-5 rounded">
         {showLoading()}
         {showError()}
         {signinForm()}
         {redirectUser()}
         
         </div>
         {JSON.stringify(values)}
      </UserLayout>

   )
}

export default UserSignin;