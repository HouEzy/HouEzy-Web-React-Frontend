import React,{useState,useEffect} from "react"
import StoreLayout from "../core/storeCore/StoreLayout";
import ProductImages from "../core/storeCore/ProductImages" 
import {Modal,Button} from "react-bootstrap"
import { readOrder ,updateOrderStatus} from "../core/storeCore/storeApi";
import moment from "moment"

const OrderDetails=(props)=>{

  const [order,setOrder]=useState({})
  const [orderProducts,setOrderProducts]=useState([])
  const [userPhoneNo,setUserPhoneNo]=useState("")
  const [newStatus,setNewStatus]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false)}
  const handleShow = (e) =>{setShow(true);setNewStatus(e.target.value)}

  

  const handleUpdateStatus=(e)=>{
      e.preventDefault()
      updateOrderStatus(props.match.params.orderId,newStatus).then(data=>{
        if(data.error)
        {
          console.log(data.error);
        }
        else{
          handleClose()
          loadOrder(props.match.params.orderId)
        }
      })
  }

  const loadOrder=(orderId)=>{
    readOrder(orderId).then(data=>{
      if(data.error)
      {
        console.log("error",data.error);
      }
      else{
        console.log(data);
        setOrder(data)
        setOrderProducts(data.products)
        setUserPhoneNo(data.user.phoneNo)
      }
    })
  }

  useEffect(()=>{
    const orderId=props.match.params.orderId;
    loadOrder(orderId)
  },[props])

  const navshow=()=>(
    <div style={{height:"60px"}} className="d-lg-none"></div>
)

  const showRejectButton=()=>(
    <div>
      {order.status !="Declined by Selller" && order.status !="Cancled By User" && order.status!="Delivered"
      ?
       (<button onClick={handleShow} value="Declined by Seller" className="btn btn-lg btn-danger" >Reject Order</button>):
       (<p>Order is {order.status}</p>)
       }
    </div>
  )

  const showUpdateStatusButton=()=>(
    <div>
      {order.status =="Pending" ? (
        <button onClick={handleShow} className="btn btn-lg btn-success" value="Confirmed">Accept Order</button>
        ): order.status == "Confirmed" ? (
          <button onClick={handleShow} className="btn btn-lg btn-warning" value="Shipped">Shipp Order</button>
        ):order.status == "Shipped" ? (
          <button onClick={handleShow} className="btn btn-lg btn-success" value="Delivered">Delivered</button>
        ):null}
    </div>
  )

  const confirmUpdateModal=(status)=>(
    <div>
       <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <div><Modal.Title>Update Order Status</Modal.Title></div>
          </Modal.Header>
          
        
          <Modal.Body>
            <p className="h4 text-muted">Are you Sure you want to update Order Status to "{newStatus}" ?</p>
            <p className="text-muted">*You cannot come back to existing status back.</p>
            <hr/>
            <div className="row">
              <div className="col-6 text-center"><button onClick={handleClose} className="btn btn-danger">Close</button></div>
              <div className="col-6 text-center"><button onClick={handleUpdateStatus} className="btn btn-success">Confirm</button></div>

            </div>
          </Modal.Body>
         
        </Modal>
    </div>
  )


  const displayOrderProducts=()=>(
    <div className="card shadow-lg " >
       <div className="card-header">
         <div className="row">
           <div className="col-6 h5">Order #{order.orderNo}</div>
           <div className="col-6  text-center">{moment(order.createdAt).format("DD MMM YYYY, h:mm a")}</div>
         </div>
         <hr/>
         <div className="h5 text-muted">Order Status :  {order.status}</div>
       </div>
       <div className="card-body overflow-auto" style={{height:"50vh"}}>
          <table className="table table-striped text-center">
             <thead className="">
             <tr>
                  
                  <th scope="col">Img</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
             </tr>
             </thead>
             <tbody>
              { orderProducts.map((p,i)=>(
                <tr>
                   <td width="15%" className="align-middle"><ProductImages product={p.product}  /></td>
                   <td className="text-wrap align-middle">{p.name}</td>
                   <td className="align-middle text-sm">₹ {p.product.sellingPrice}</td>
                   <td className="align-middle">{p.count}</td>
                   <td className="align-middle">₹ {p.product.sellingPrice * p.count}</td>
                </tr>
              ))}
             </tbody>
          </table>
       </div>
    </div>
  )

  const showCustomerDetails=()=>(
    <div className="card shadow-lg " >
       <div className="card-header">
         <h4>Customer Info</h4>
       </div>
       <div className="card-body overflow-auto" style={{height:"35vh"}}>
         <table className="table table-striped text-center">
            <tbody>
            <tr>
              <th>Name</th>
              <td>{order.customerName}</td>
            </tr>
            
            <tr>
              <th>Contact No</th>
              <td>{userPhoneNo}</td>
            </tr>

            <tr>
              <th>Address</th>
              <td>{order.address}</td>
            </tr>
            
            <tr>
              <th>City</th>
              <td>{order.city}</td>
            </tr>

            <tr>
              <th>Pin Code</th>
              <td>{order.pincode}</td>
            </tr>

            <tr>
              <th>Payment</th>
              <td>{order.paymentMethod}</td>
            </tr>
            </tbody>
         </table>
       </div>
    </div>
  )

  const showTotalAmount=()=>(
    <div className="card shadow-lg">
      <div className="card-header">
        <h5>Total Amount</h5>
      </div>
      <div className="card-body">
        <table className="table">
          <tbody>
            <tr>
              <th>Prduct Total</th>
              <td>₹ {order.amount}</td>
            </tr>
            <tr>
              <th>Delivery Charge</th>
              <td>₹ 0</td>
            </tr>
          </tbody>
          <tr className="p-2 h4">
              <th>Grand Total : </th>
              <td className="ml-auto">₹ {order.amount}</td>
          </tr>
          <tr className="d-lg-none p-2 h4 fixed-bottom bg-light shadow-lg">
              <div className="col-10 mx-auto text-center">
              <th>Grand Total : </th>
              <td className="ms-auto">₹ {order.amount}</td>
              </div>
            </tr>
        </table>
      </div>
    </div>
  )
    
    return(
        <div>
          <StoreLayout>
              <div className="container-fluid">
              {navshow()}
              <br/>
              {confirmUpdateModal()}
              <div className="row">
                <div className="col-12 col-md-7 my-auto" >
                  <div className="row">
                    <div className="col-6">{showRejectButton()}</div>
                    <div className="col-6">{showUpdateStatusButton()}</div>
                  </div>
                 <div className="mt-3"> {displayOrderProducts()}</div>
                  
                </div>
                <div className="col-12 col-md-5 my-auto">
                  <div className="mt-3">{showCustomerDetails()}</div>
                  <div className="mt-3">{showTotalAmount()}</div>

                </div>
              </div>
              </div>
          </StoreLayout>
        </div>
    )
}

export default OrderDetails;