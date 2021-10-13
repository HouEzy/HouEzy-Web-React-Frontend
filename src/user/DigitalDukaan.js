import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import { isAuthenticated } from "../auth/storeAuth"
import ProductCard from "../core/userCore/ProductCard"
import { readStoreByLinkName,listCollectionsByStore,getProductsByCollection ,getProductsByStore} from "../core/userCore/userApi"
import UserStoreLayout from "../core/userCore/UserStoreLayout"

import {MdShoppingCart,MdStore} from "react-icons/md"
import {FaSignInAlt} from "react-icons/fa"

const DigitalDukaan=(props)=>{
    
    const[run,setRun]=useState(false)
    const [store,setStore]=useState({})
    const [collections,setCollections]=useState([])
    const [selectedCollection,setSelectedCollection]=useState(0)
    const [selectedCollectionName,setSelectedCollectionName]=useState("All")
    const [products,setProducts]=useState([])

    const loadStoreByLink=(linkName)=>{
        readStoreByLinkName(linkName).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setStore(data)
                console.log(store);
            }
        })
    }

    const loadCollections=storeId=>{
        listCollectionsByStore(storeId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                setCollections(data)
                showCollections()
                
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
            loadProductsByStore(store._id)
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
        const storeLinkName=props.match.params.storeLinkName;
        loadStoreByLink(storeLinkName)
       
       
    },[props])

    useEffect(()=>{
        loadCollections(store._id)
        if(selectedCollection==0)
        {
            loadProductsByStore(store._id)
        }
        else{
            loadProductsByCollection(selectedCollection)
        }
    },[store])

    

    const showCollections=()=>(
        <div className="align-middle">
            <ul className=" list-group">
                <button onClick={clickCollection} value={0} className=" h5 p-4 list-group-item list-group-item-action text-center " style={{borderRight:selectedCollection == 0 ? '20px solid #145374': 'none',backgroundColor:selectedCollection == 0 ? '#D7E9F7': 'white' , color:selectedCollection == 0 ? "#00121b": 'black'}}>All</button>
               {collections && collections.map((c,i)=>(
                   <button onClick={clickCollection} value={c._id} className="h5 p-4 list-group-item list-group-item-action text-center" style={{borderRight:selectedCollection == c._id ? '20px solid #00121b': 'none',backgroundColor:selectedCollection == c._id ? '#D7E9F7': 'white' , color:selectedCollection == c._id ? "#00121b": 'black'}}>{c.name}</button>
               ))}
            </ul>
        </div>
    )

    const ShowProducts=()=>(
        <div className="col-12 col-md-12 m-0">
            
            {products && products.length>0 && products.map((p,i)=>(
                <div key={i}><ProductCard product={p} /></div>
            ))}
        </div>
    )

    return(
        <div className="" >
            <UserStoreLayout store={store} >
            <div className="col-12 col-md-12 ml-auto row m-0 p-0">
                <div className="d-none d-md-block p-0 col-md-3 overflow-auto " style={{height:"100vh",borderLeft:"5px solid #B2B1B9",borderRight:"5px solid #B2B1B9",overflow:"hidden"}}>{showCollections()}</div>
                <div className="col-12 col-md-6 m-0 p-0" style={{}}>{ShowProducts()}</div>
                <div className="d-none d-md-block col-md-3 ml-auto" style={{borderLeft:"5px solid #B2B1B9"}}></div>
            </div>
            
            </UserStoreLayout>
        </div>
    )
}

export default DigitalDukaan