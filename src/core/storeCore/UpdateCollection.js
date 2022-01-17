import React,{useState} from "react"
import {Modal,Button} from "react-bootstrap"
import {updateCollection} from "../storeCore/storeApi"
import {isAuthenticated} from "../../auth/storeAuth"
import { MdSearch,MdEdit } from "react-icons/md";
 

const UpdateCollection=({setRun = f => f, run = undefined,collectionId})=>{
    const [show, setShow] = useState(false);
    const [collectionName,setCollectionName]=useState("")
    const [error,setError]=useState("")
    const [success,setSuccess]=useState(false)

  
    const handleClose = () =>{ setShow(false); setSuccess(false) ; setCollectionName("")}
    const handleShow = () => setShow(true);
  
    const handleCollection= ()=>event =>{
      setCollectionName(event.target.value)
    }
     
    const clickSubmit=(e)=>{
      e.preventDefault()
      updateCollection(collectionId,collectionName)
      .then(data=>{
         if(data.error)
         {
           setError(data.error)
           setSuccess(false)
         }
         else
         {
           setError("")
           setSuccess(true)
           setRun(!run)
         }
      })
    }

    const showSuccess  =()=>(
      <div className="alert alert-info" style={{display:success ? "":"none"}}>
           Collection Updated !!!
    </div>
    )

    return (
      <>
        <Button variant="light" onClick={handleShow}>
         <MdEdit className="h4 text-primary" />
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <div><Modal.Title>Update Collection</Modal.Title></div>
          </Modal.Header>
          <div className="col-12">{showSuccess()}</div>

          <Modal.Body>
          <form >
              <div className="form-group">
              <label className="text-muted">Collection Name:</label>
              <input onChange={handleCollection()} type="text" className="form-control-lg col-12" value={collectionName}  required></input>
              </div>
              <button onClick={clickSubmit}  type="submit" className="mt-3 col-12 btn btn-primary btn-lg btn-block ">Add</button>
            </form>
          </Modal.Body>
         
        </Modal>
      </>
    );
  }
  
  export default UpdateCollection;