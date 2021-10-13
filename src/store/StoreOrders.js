import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import { listOrderStatusValues,listOrdersByStore,listOrdersByStatus } from "../core/storeCore/storeApi"
import { isAuthenticated } from "../auth/storeAuth"
import moment from "moment"
import {Helmet} from "react-helmet"

import {AiOutlineCodeSandbox , AiFillClockCircle , AiOutlineUnorderedList} from "react-icons/ai"

const StoreOrders=(props)=>{

    const [statusValues,setStatusValues]=useState([])
    const [selectedStatusValue,setSelectedStatusValue]=useState(0)
    const [orders,setOrders]=useState([])

    const storeId = isAuthenticated().loggedInMember._id

    const loadStatusValues=()=>{
        listOrderStatusValues().then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else
            {
                setStatusValues(data)
            }
        })
    }

    const loadOrdersByStore=()=>{
        listOrdersByStore(storeId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setOrders(data)
            }
        })
    }

    const loadOrdersByStatus=(status)=>{
        listOrdersByStatus(status).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setOrders(data)
            }
        })
    }

    const clickStatusValue=(e)=>{
      e.preventDefault()
      setSelectedStatusValue(e.target.value)
      if(e.target.value==0)
        {
            
            loadOrdersByStore(storeId)
        }
        else{
            loadOrdersByStatus(e.target.value)
            
        }

    }

    useEffect(()=>{
        loadStatusValues()
        if(selectedStatusValue ==0)
        {
            loadOrdersByStore(isAuthenticated().loggedInMember._id)
        }
        else{
            loadOrdersByStatus(selectedStatusValue)
        }
    },[props])

    const navshow=()=>(
        <div style={{height:"60px"}} className="d-lg-none"></div>
    )

    const headline=()=>(
        <nav className="navbar navbar-default  navbar-expand nav-primary ml-2 bg-transparent shadow-lg  " style={{zIndex:"-1"}}>
                     
                     <Link className="navbar-brand " to="/"><h4 className="text-dark" style={{zIndex:"0"}}>Orders</h4></Link>
                                          
                     <ul className="navbar-nav ms-auto">
                       
                         
                     </ul>                                         
        </nav>
    )

    const showStatusValues=()=>(
        <div className="col-11 mx-auto">
            <div className="row flex-nowrap ">
         
         <div className="w-auto badge badge-pill" style={{zIndex:"0"}}>
            <button onClick={clickStatusValue} className="btn  btn-center small h-75 mr-2" value={0} style={{backgroundColor:selectedStatusValue == 0 ? '#0275d8': 'white',color:selectedStatusValue == 0 ? 'white': 'black'}}>All</button>
         </div>
         {statusValues && statusValues.map((s,i)=>(
          <div className="w-auto badge badge-pill" style={{zIndex:"1"}}>
            <button onClick={clickStatusValue}   key={i} className="btn  btn-center  small h-75 mr-3" value={s} style={{backgroundColor:selectedStatusValue == s ? '#0275d8': 'white',color:selectedStatusValue == s ? 'white': 'black'}}>{s}</button>
         </div>
         ))}
         
     
      </div>
        </div>
    )

    const orderCard=(order)=>(
        <div className="card">
           <div className="card-header text-light" style={{backgroundColor:"#082032"}}>
               <div className="row">
                   <div className=" h6">Order #{order.orderNo}</div>
                   
               </div>
           </div>
           <div className="card-body">
            <div className="row">
                <div className="col-3 my-auto">
                    <AiOutlineCodeSandbox className="h1 bg-secondary text-light rounded mx-auto" style={{fontSize:"10vh"}} />
                </div>
                <div className="col-8 my-auto">
                    <div className="h5">₹ {order.amount}</div>
                    <div className="h6"><AiOutlineUnorderedList/> {order.products.length} products</div>
                    <div className="h6"><AiFillClockCircle /> {moment(order.createdAt).format("DD MMM YYYY, h:mm a")}</div>
                </div>
            </div>
           </div>
           <div className="card-footer bg-transparent">
               <div className="row">
                   <div className="col-6 rounded" style={{backgroundColor:"#BBBFCA"}}><p className="h6 text-center p-1">{order.status}</p></div>
                   <div className="col-3 ms-auto"><Link to={`/store/orders/${order._id}`}><button className="btn btn-primary ml-auto">Details</button></Link></div>
               </div>
           </div>

        </div>
    )

    const showOrders=()=>(
        <div >
            {orders.map((o,i)=>(
                <div className="p-2 col-12 col-md-10 mx-auto">
                    {orderCard(o)}
                </div>
            ))}
        </div>
    )



    return(
        <div>
           <Helmet>
               <title>Orders | Bizznect</title>
           </Helmet>
           <StoreLayout>
              <div>
              {navshow()}
              {headline()}
              <div className="overflow-auto col-12  mx-auto " style={{overflow:"hidden"}}>{showStatusValues()}</div>
              </div>
              {selectedStatusValue}
              <div className="overflow-auto shadow-lg" style={{height:"70vh"}}>{showOrders()}</div>
           </StoreLayout>
        </div>
    )
}

export default StoreOrders