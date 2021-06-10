import React,{useState,useEffect} from "react"
import StoreLayout from "../core/storeCore/StoreLayout"
import {isAuthenticated} from "../auth/storeAuth"
import {listCollectionsByStore} from "../core/storeCore/storeApi"
import CollectionCard from "../core/storeCore/CollectionCard"


const StoreCollections=(props)=>{

    const [collections,setCollections]=useState([])

    

    const loadCollections=storeId=>{
       listCollectionsByStore(storeId).then(data=>{
           
           setCollections(data)
       })
    }
    const displayCollections=()=>(
        
        <div className=" mx-auto">
            <div className="row mx-auto">
          
            {collections.map((c,i)=>(
               <div className="col-6 col-md-6">
                 <CollectionCard name={c.name}></CollectionCard>
               </div>
            ))}
            </div>
        </div>
    )

    useEffect(()=>{
        const storeId=isAuthenticated().loggedInMember._id;
        loadCollections(storeId)
    },[props])
    

  return(
     <div>
         
         <StoreLayout title="Collections" description="You Can Manage Your Store From Here.">
         <div className="container-fluid col-12 col-md-7">
         {displayCollections()}
         </div>
         Hello
         </StoreLayout>
     </div>
  )
}

export default StoreCollections