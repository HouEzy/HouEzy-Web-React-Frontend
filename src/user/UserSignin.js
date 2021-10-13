import React,{useState} from "react"
import {Redirect} from "react-router-dom"
import UserLayout from "../core/userCore/UserLayout"
import {signin,authenticate} from "../auth/userAuth"


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
         authenticate(data,()=>{
            setValues({
                ...values,
               redirectToReferrer:true
                
          })
        })  
      }
     })
  }


   const signinForm=()=>(
     
      <form>
      <div className="form-group"   >
         <label className="text-muted">E-mail</label>
         <input onChange={handleChange("email")} type="email"  style={{zIndex:"1"}}  className="form-control" value={email} />
      </div>
      <div className="form-group" style={{zIndex:"100000"}}>
         <label className="text-muted">Password:</label>
         <input onChange={handleChange("password")} type="password"  className="form-control" value={password} />
      </div>
      <div className="col-5  ms-auto mx-md-auto"   style={{zIndex:"1"}}>
      <button type="button" onClick={clickSubmit} className="btn btn-info mt-2">Log In as User</button>
      </div>
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
      <div className=" m-0">
         <UserLayout showCategoryBar={false} showSideMenu={false}>
         <div className="col-10 col-md-5 mx-auto shadow p-2 rounded">
         {showLoading()}
         {showError()}
         <div  >
         {signinForm()}
         </div>
         {redirectUser()}
         
         </div>
         
      </UserLayout>
      </div>

   )
}

export default UserSignin;