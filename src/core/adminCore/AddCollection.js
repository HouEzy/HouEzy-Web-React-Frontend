import React,{useState} from "react"
import {Modal,Button} from "react-bootstrap"


  
const AddCollection=()=>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Collection
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form >
              <div className="form-group">
              <label className="text-muted">Collection Name:</label>
              <input type="text" className="form-control"   required></input>
              </div>
              <button type="submit" className="btn btn-info float-center">Add</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddCollection;