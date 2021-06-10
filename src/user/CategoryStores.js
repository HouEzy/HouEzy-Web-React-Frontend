import React,{useState,useEffect} from "react"
import UserLayout from "../core/userCore/UserLayout"
import StoreCard from "../core/userCore/StoreCard"
import {listStoresByCategory} from "../core/userCore/userApi"
import {API} from "../config"

const CategoryStores=(props)=>{
    
    const [stores,setStores]=useState([])
   
    const loadStores=(categoryId)=>{
        listStoresByCategory(categoryId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setStores(data)
            }
        })
    }

    useEffect(()=>{
        const categoryId=props.match.params.categoryId
        loadStores(categoryId)
       },[props])


    return(
        <div>
            <UserLayout >
           <div className="col-12 col-md-10 mx-auto overflow-auto" style={{height:"70vh"}}>
           <div className="row">
            {stores.map((store,i)=>(
                <div key={i} className="col-12 col-md-5 mx-auto  mb-3 mr-2 p-0 shadow-lg">
                      <StoreCard  store={store} />
                </div>
            ))}
            </div>
           </div>
            </UserLayout>
        </div>
    )
}

export default CategoryStores