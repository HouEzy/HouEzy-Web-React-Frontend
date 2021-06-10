import React,{useState,useEffect} from "react"
import { Toast,Row,Col,Button } from 'react-bootstrap';


const ToastMessage=()=>{

    const [showA, setShowA] = useState(true);
   


  const toggleShowA = () => setShowA(!showA);
  

  return (
    
        <div style={{position: 'relative',minHeight: '100px', }}>
          <Toast show={showA} onClose={toggleShowA} delay={2000} autohide style={{position: 'absolute',top:"0", right:"0"}} >
         
         <Toast.Body className="">Woohoo, you're reading this text in a Toast!</Toast.Body>
         </Toast>
    
        </div>
  );
}

export default ToastMessage