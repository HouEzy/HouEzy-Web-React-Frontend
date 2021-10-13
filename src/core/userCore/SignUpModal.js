import React,{useState} from "react"
import {signup,sendOtp,verifyOtp} from "../../auth/userAuth"
import {Modal,Button} from "react-bootstrap"
import {authenticate,signin} from "../../auth/userAuth"

const SignupModal=()=>{

    const [count, setCount] = useState(1)
    const [show, setShow] = useState(false);
    const [values,setValues]=useState({
        name:"",
        email:"",
        phoneNo:"",
        otp:"",
        password:"",
        error:"",
        success:false
  })

  const {name,email,phoneNo,otp,password,success,error}=values


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
            signin({phoneNo})
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

  const handleClose = () =>{ setShow(false);  }
    const handleShow = () => setShow(true);

    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

  const signUpForm=()=>(
      <div>
          <Button variant="transparent" className="text-light" onClick={handleShow}>
             Account
          </Button>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <div><Modal.Title>SignUp</Modal.Title></div>
          </Modal.Header>
          

          <Modal.Body>
            <form >
              {count===1 ? (
                  <div>
                  <div className="form-group">
                    <label className="text-muted">Phone Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend my-auto" >
                         <span className="input-group-text text-light " style={{backgroundColor:"#1B0044"}}>+91</span>
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
                    <button onClick={handleSendOtp} className=" mt-3 col-12 btn btn-lg btn-block text-light " disabled={!phoneNo} style={{backgroundColor:"#1B0044"}} >Get Started</button>
                  </div>
                  </div>
              ):null}

              {count===2 ? (
                <div>
                
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
                  <button onClick={handleVerifyOtp} className="col-12 mt-3 btn btn-primary btn-lg btn-block" style={{backgroundColor:"#1B0044"}}>Verify OTP</button>
                </div>
                </div>
              ): null}
              
            </form>
          </Modal.Body>
         
        </Modal>
      </div>
  )

    return(
        <div>
           {signUpForm()}
        </div>
    )
}

export default SignupModal;