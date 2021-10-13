import React,{useState,useEffect} from "react"
import {Link } from "react-router-dom"
import UserLayout from "../core/userCore/UserLayout"
import StoreCard from "../core/userCore/StoreCard"
import {searchStore} from "../core/userCore/userApi"

const SearchResult=(props)=>{

    const [stores,setStores]=useState([])

   const loadSearchResult=(searchTerm)=>{
       searchStore(searchTerm).then(data=>{
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
        const searchTerm=props.match.params.key
        loadSearchResult(searchTerm)
       },[props])

    return(
        <div className="overflow-auto" style={{height:"100vh"}}>
          <UserLayout>
         <div className="col-12 col-md-10 mx-auto" >
         <p className="lead">Found {stores.length} stores for " {props.match.params.key} "</p>
         </div>
          <div className="col-12 col-md-10 mx-auto overflow-auto" style={{height:"70vh",overflowX:"hidden",overflowY:"hidden"}}>
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

export default SearchResult