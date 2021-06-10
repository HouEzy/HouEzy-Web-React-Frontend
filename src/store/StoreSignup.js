import React,{useState} from "react"
import StoreLayout from "../core/storeCore/StoreLayout"
import csc from 'country-state-city'
import {signup} from "../auth/storeAuth"



const StoreSignup=()=>{ 

  const cities=csc.getCitiesOfState("IN","MH")
  let optionCities = cities.map((city) =>
        <option value={city.name} >{city.name}</option>
    );
  

  const [values, setValues] = useState({
    name:"",
    email:"",
    phoneNo:"",
    password:"",
    businessName:"",
    city:"",
    category:"",
    address:"",
    openTime:"",
    closeTime:"",
    error:"",
    success:false
  })
  
  const {name,email,phoneNo,password,businessName,city,category,address,openTime,closeTime,error,success}=values

  const [count, setCount] = useState(1)

  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const clickSubmit=(event)=>{
  event.preventDefault()
  setValues({...values,error:false})

  
  
  signup({name,email,phoneNo,password,businessName,city,category,address,openTime,closeTime})
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
                    password:"",
                    businessName:"",
                    city:"",
                    category:"",
                    address:"",
                    openTime:"",
                    closeTime:"",
                    phoneNo:"",
                    error:"",
                    success:true
              })
        }
  })
 
}
    
    const signupForm=()=>(
      <div>
     
      <form>
      {count === 1 ? (
        <div>
        <h3 class="text-center">Your Details</h3>
        <div className="form-group">
          <label className="text-muted">Name : </label>
          <input
            type="text"
            className="form-control"
            required="true"
            onChange={handleChange("name")}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Phone No</label>
          <input
            type="tel"
            className="form-control"
            onChange={handleChange("phoneNo")}
            value={phoneNo}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange("password")}
            value={password}
          />
        </div>
        </div>
        
      ) : null}
      {count === 2 ? (
        <div>
        <h3 className="text-center">Business Details</h3>
        <div className="form-group">
          <label className="text-muted">Business Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("businessName")}
            value={businessName}
          />
        </div>
       <div className="row">
         <div className="col">
            <div className="form-group">
              <label className="text-muted">City</label>
              <select class="form-select" aria-label="Default select example" onChange={handleChange("city")} value={city}>
              <option selected>Open this select menu</option>
              <option value="Aurangabad">Aurangabad</option>
              {optionCities}
             
              </select>
            </div>
         </div>
         <div className="col">
            <div className="form-group">
              <label className="text-muted">Category</label>
              <select  class="form-select" onChange={handleChange("category")} value={category}>
              <option >Open this select menu</option>
              <option value="Grocery">Grocery</option>
              <option value="Electronics">Electronics</option>
              <option value="Gifts">Gifts</option>
              <option value="Stationary">Books and Stationary</option>
              <option value="General">General Store</option>
              
             
              </select>
            </div>
         </div>
       </div>
       <div className="form-group">
          <label className="text-muted">Business Address</label>
          <textarea
            type="text"
            className="form-control"
            onChange={handleChange("address")}
            value={address}
          ></textarea>
        </div>

        <div className="row">
          <div className="col">
          <div className="form-group">
          <label className="text-muted">Open Time</label>
          <input
            type="time"
            className="form-control"
            onChange={handleChange("openTime")}
            value={openTime}
          />
        </div>
          </div>
          <div className="col">
          <div className="form-group">
          <label className="text-muted">close Time</label>
          <input
            type="time"
            className="form-control"
            onChange={handleChange("closeTime")}
            value={closeTime}
          />
        </div>
          </div>
        </div>

        </div>
      ) : null}
      
      {count === 2 ? (
        <div className="text-center">
        <button onClick={clickSubmit} className="btn btn-primary mt-3">
          Submit
        </button>
        </div>
      ) : null} 
    </form>
    <div className="text-center">
    <button
        className="btn btn-info mt-2"
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      
      <button
        className="btn btn-warning mt-2 float-right"
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count >= 2}
      >
        Next
      </button>
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

    return (
        
            <StoreLayout title="Store SignUp" description="Register">
            <div className="container-fluid col-11 col-lg-5 shadow p-2 p-lg-5 ">
                  {showError()}
                  {showSuccess()}                 
                  {signupForm()}
             </div>
             
            </StoreLayout>
        
    )
}

export default StoreSignup