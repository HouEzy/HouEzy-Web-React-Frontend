import React,{useState} from "react"
import {Modal,Button} from "react-bootstrap"
import {createCategory} from "./adminAPI"
import {isAuthenticated} from "../../auth/adminAuth"

  
const AddCategory=()=>{
    const [show, setShow] = useState(false);
    const [name,setName]=useState("");
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    const {admin,token}=isAuthenticated()
  
    const handleClose = () => {setShow(false);setSuccess("")}
    const handleShow = () => setShow(true);

    const handleChange=(e)=>{
      setError("")
      setName(e.target.value)
  }

  const clickSubmit = (e)=>{
    e.preventDefault()
        setError("")
        setSuccess(false)
        // make request to api to create category
        createCategory(admin._id,token,{name})
        .then(data =>{
            if(data.error)
            {
                setError(data.error)
            }
            else{
                setError("");
                setSuccess(true)
            }
        })
    
}

const showError =()=>{
  if(error)
  {
      return  <div className="alert alert-danger" style={{display:error ? "":"none"}}>
                 {name} already exist!Category should be unique.
               </div>
  }
}
const showSuccess =()=>{
  if(success)
  {
      return <h3 className="text-success">{name } category is created.!!</h3>
  }
}
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Category
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showSuccess()}
          {showError()}
            <form onSubmit={clickSubmit}>
              <div className="form-group">
              <label className="text-muted">Category Name:</label>
              <input type="text" className="form-control" onChange={handleChange} value={name} required></input>
              </div>
              <button type="submit" className="btn btn-info float-center">Add</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default AddCategory