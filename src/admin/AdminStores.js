import React,{useState,useEffect} from "react"
import AdminLayout from "../core/adminCore/AdminLayout"
import StoreCard from "../core/adminCore/StoreCard"
import {getStores} from "../core/adminCore/adminAPI"

const AdminStores=()=>{
   const [stores,setStores]=useState([])
   const loadStores = ()=>{
    getStores().then(data=>{
        if(data.error)
        {
           console.log(data.error);
        }
        else
        {
            setStores(data)
        }
    })
    }
    useEffect(()=>{
        loadStores()        
    },[])

    return(
        <AdminLayout title="See Stores" description="You Can Manage HouEzy From Here.">
            <div className="container-fluid">
            {stores.map((store,i)=>(
                
                <div  key={i} className="col-11 col-lg-7 mx-auto mb-3 shadow">
                <StoreCard store={store}/>
                {console.log(store)}
                </div>
            ))} 
            </div>
            <div className="h-35"></div>
            
        </AdminLayout>
    )
}

export default AdminStores