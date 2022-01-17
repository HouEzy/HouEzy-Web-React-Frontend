import React,{useState,useEffect} from "react"
import {Modal,Button,Form, Option} from "react-bootstrap"
import {listCollectionsByStore , listUnitValues,updateProduct} from "../storeCore/storeApi"
import {isAuthenticated} from "../../auth/storeAuth"
import AddCollection from "./AddCollection"
import { MdSearch,MdEdit,MdModeEdit } from "react-icons/md";

const UpdateProduct=({props,product})=>{
    const [show, setShow] = useState(false);
    const [collectionValues,setCollectionValues]=useState([])
    const [unitValues, setUnitValues]=useState([])
    
    const [values,setValues]=useState({
      name:product.name,
      description:product.description,
      collectionId:product.collection,
      store:product.storeId,
      mrp:product.mrp,
      sellingPrice:product.sellingPrice,
      unit:product.unit,
      photos:[],
      loading:false,
      error:"",
      success:false,
      formData:""
   })
   const {
      name,
      description,
      collectionId,
      store,
      mrp,
      sellingPrice,
      unit,
      photos,
      loading,
      error,
      success,
      formData
   }=values
    

   const handleChange=name=>event=>{
      
     
      const value=name==="photos"? event.target.files[0]:event.target.value;
      
      formData.set(name,value)
      
      setValues({...values,[name]:value})
   }


    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);

    const loadCollections=storeId=>{
      listCollectionsByStore(storeId).then(data=>{
          
          setCollectionValues(data)
      })
   }
    const loadUnitValues=()=>{
       listUnitValues().then(data =>{
         setUnitValues(data)
       })
    }

    const clickSubmit=(event)=>{
      event.preventDefault()
      console.log(photos);
      setValues({...values,loading:true})
      formData.set("store",isAuthenticated().loggedInMember._id)
      updateProduct(product._id,formData).then(data=>{
         if(data.error)
         {
            setValues({...values,error:data.error})
         }
         else{
            setValues({
               name:"",
               description:"",
               collectionId:"",
               store:"",
               mrp:0,
               sellingPrice:0,
               unit:"",
               photos:[],
               loading:false,
               error:"",
               success:true,
            })
            
         }
      })
      
    }

    useEffect(()=>{
      const storeId=isAuthenticated().loggedInMember._id;
     loadUnitValues();
     loadCollections(storeId)
     setValues({...values,formData:new FormData()})
  },[props])


    const showSuccess  =()=>(
      <div className="alert alert-info" style={{display:success ? "":"none"}}>
           Product Created !!!
    </div>
    )

    let optionCollection = collectionValues && collectionValues.map((c,i)=>
       <option value={c._id} key={i}>{c.name}</option>
    )

    let optionUnit = unitValues && unitValues.map((unit,i) =>
      <option value={unit} >{unit}</option>
    );


    
    return(
        <div>
            <>
        
        <Button variant="light" onClick={handleShow}>
        <MdModeEdit className="h4 text-primary" />

        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <div><Modal.Title>Add Product</Modal.Title></div>
          </Modal.Header>
          <div className="col-12">{showSuccess()}</div>

          <Modal.Body>
          <form onSubmit={clickSubmit}>
              <div className="form-group">
              <label className="text-muted">Product Name:</label>
              <input onChange={handleChange("name")} name="name" value={name} type="text" className="form-control col-12"  required></input>
              </div>
              <div className="form-group">
              <label className="text-muted">Product Description:</label>
              <textarea onChange={handleChange("description")} name="description" value={description}  type="text" className="form-control col-12"  required></textarea>
              </div>
              <div className="row">
                 <div className="form-group col-6 my-auto">
                    <label className="text-muted">Product Category:</label>
                    <Form.Select aria-label="Default select example" onChange={handleChange("collectionId")} name="colectionId" value={collectionId}>
                     <option>Select Category</option>
                     <option value="1">One</option>
                     {optionCollection}
                  </Form.Select>                 
                  </div>
                 <div className="form-group col-6 my-auto mx-auto">
                 <label className="text-muted">Product Name:</label>
                    <AddCollection />
                 </div>
              </div>

              <div className="row">
                 <div className="form-group col-6 my-auto">
                    <label className="text-muted">Price:</label>
                    <div className="input-group">
                    <div className="input-group-prepend my-auto" >
                        <span className="input-group-text text-light" style={{backgroundColor:"#0a1931"}}>₹</span>
                    </div>
                    
                    <input onChange={handleChange("mrp")} name="mrp" value={mrp}  type="text" className="form-control "  required></input>
                    </div>
                 </div>

                 <div className="form-group col-6 my-auto">
                    <label className="text-muted">Discounted Price:</label>
                    <div className="input-group">
                    <div className="input-group-prepend my-auto" >
                        <span className="input-group-text text-light" style={{backgroundColor:"#0a1931"}}>₹</span>
                    </div>
                    
                    <input onChange={handleChange("sellingPrice")} name="sellingPrice" value={sellingPrice}  type="text" className="form-control "  required></input>
                    </div>
                 </div>
                
              </div>

              <div className="row">
                  <div className="form-group col-6">
                  <label className="text-muted">Product Unit:</label>
                  <Form.Select aria-label="Default select example" onChange={handleChange("unit")} name="unit" value={unit}>
                     <option>Select Unit</option>
                      {optionUnit}
                  </Form.Select>
                  </div>
                  <div className="form-group col-6">
                  <label className="text-muted">Product Image:</label>
                  <input onChange={handleChange("photos")}   name="photos"  type="file" className="form-control " accept="image/*" ></input>
 
                  </div>
              </div>

             
              
              <button   type="submit" className="mt-3 col-12 btn btn-primary btn-lg btn-block ">Add</button>
            </form>
           
          </Modal.Body>
        </Modal>
      </>
        </div>
    )
}

export default UpdateProduct;