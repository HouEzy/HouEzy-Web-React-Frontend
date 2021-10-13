import React,{useState,useEffect} from "react"
import UserLayout from "../core/userCore/UserLayout"
import StoreImage from "../core/userCore/StoreImage"
import ProductCard from "../core/userCore/ProductCard"
import {readStore,listCollectionsByStore,getProductsByCollection,getProductsByStore} from "../core/userCore/userApi"

import {Dropdown} from "react-bootstrap"
import { MdSearch } from "react-icons/md";


const Store=(props)=>{

    const storeId = props.match.params.storeId

    const [store,setStore]=useState({})
    const [collections,setCollections]=useState([])
    const [selectedCollection,setSelectedCollection]=useState(0)
    const [selectedCollectionName,setSelectedCollectionName]=useState("All")
    const [products,setProducts]=useState([])


    const loadSingleStore = storeId =>{
        readStore(storeId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setStore(data);               
            }
        })
     }

     const loadCollections = storeId =>{
        listCollectionsByStore(storeId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setCollections(data);
                
               
            }
        })
     }

     const loadProductsByStore=(storeId)=>{
        getProductsByStore(storeId).then(data=>{
            setProducts(data)
        
        })
    }
    
    const loadProductsByCollection=(collectionId)=>{
        getProductsByCollection(collectionId).then(data=>{
             setProducts(data)
             
        })
    }

    const clickCollection=(event)=>{
        event.preventDefault()
        console.log(event.target.value);
        setSelectedCollection(event.target.value)
        if(event.target.value==0)
        {
            setSelectedCollectionName("All")
            loadProductsByStore(storeId)
        }
        else{
            loadProductsByCollection(event.target.value)
            collections.forEach((collection)=>{
                if(event.target.value==collection._id){
                    setSelectedCollectionName(collection.name)
                }
            })
        }

    }

    useEffect(()=>{
        const storeId = props.match.params.storeId
        loadSingleStore(storeId)
        loadCollections(storeId)
        if(selectedCollection==0)
        {
            loadProductsByStore(storeId)
        }
        else{
            loadProductsByCollection(selectedCollection)
        }
    },[props])

    const storeDetails=()=>(
        <div className="card col-12 shadow-lg mx-auto" style={{backgroundColor:"#fffdf6"}}>
            
            <div className="col-12 col-md-7 mx-auto">
            <div className="row">
                <div className="col-4 col-md-2 my-auto"><StoreImage store={store} /></div>
                <div className="col-8 col-md-9 my-auto ">
                    <div className="h2 ">{store.businessName}</div>
                    <div>{store.status ? `Open Now`:`Closed Now`}</div>
                </div>
            </div>
            </div>
            
            <div className="col-12 col-md-7 mx-auto">{SearchBar()}</div>
        </div>
    )
    const ShowCollections=()=>(
        <div className="row flex-nowrap">
         
        <div className="w-auto" style={{zIndex:"1"}}>
           <button onClick={clickCollection} className="btn  btn-center small h-75 mr-2" value={0}>All</button>
        </div>
        {collections && collections.map((collection,i)=>(
         <div className="w-auto" style={{zIndex:"1"}}>
           <button onClick={clickCollection}   key={i} className="btn  btn-center small h-75 mr-3" value={collection._id}>{collection.name}</button>
        </div>
        ))}    
     </div>
    )

    const SearchBar=()=>(
        <form className="p-2" >            
            <div className="input-group">
            <div className="input-group-prepend bg-white col-4 col-md-2 mx-auto rounded">
                    <Dropdown>
                     <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Collection
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item><button className="btn" onClick={clickCollection}  value={0} >All</button></Dropdown.Item>
                      {collections.map((c,i)=>(
                                 <Dropdown.Item key={i} >
                                 <button className="btn" onClick={clickCollection}  value={c._id} >{c.name}</button>
                                 </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
            <input type="search" className="form-control" placeholder={`Search in ${store.businessName}`}  />
            <div className="input-group-append">
              <button className="btn btn-info" type="button"><MdSearch className="h5" /></button>
            </div>
            </div>           
        </form>
    )

    const ShowProducts=()=>(
       <div className="overflow-auto" style={{height: "80vh"}} >
            <div className="row mt-2">
                   
                   {products.map((product,i)=>(
                      <div key={i} className="col-11 col-md-5 mx-auto  mb-3 mr-4 p-0 shadow-lg">
                       <ProductCard product={product} />
                      </div>
                   ))}
         </div>
       </div>
    )


    return(
        <div className="overflow-auto" style={{height:"100vh"}}>
            <UserLayout showSearch={false} showCategoryBar={false}>
            <div className="">
                {storeDetails()}
            </div>
            
            <div className="overflow-auto col-12 col-md-7 mx-auto " style={{overflowX:"hidden"}}>
              {ShowCollections()}
            </div>
            <div className="col-12 col-md-10 mx-auto">{ShowProducts()}</div>

            </UserLayout>
        </div>
    )
}

export default Store