import React,{useState,useEffect} from "react"
import AdminLayout from "../core/adminCore/AdminLayout"
import {read,listCollectionsByStore,getProductsByCollection,getProductsByStore,productPhotos} from "../core/adminCore/adminAPI"
const Store=(props)=>{

    const [store,setStore]=useState({})
    const [error,setError] = useState(false)
    const [collections,setCollections]=useState([])
    const [selectedCollection,setSelectedCollection]=useState(0)
    const [products,setProducts]=useState([])

    const loadSingleStore = storeId =>{
        read(storeId).then(data=>{
            if(data.error)
            {
                setError(data.error)
            }
            else{
                setStore(data);
                
               
            }
        })
     }

     const loadStoreCollections = storeId =>{
        listCollectionsByStore(storeId).then(data=>{
            
                setCollections(data);
                
                
           
        })
     }
     
     const loadProductsByStore=(storeId)=>{
         
        
            getProductsByStore(storeId).then(data=>{
                console.log(data);
                setProducts(data)
             })
        
     }
     const loadProductsByCollection=(collectionId)=>{
         getProductsByCollection(collectionId).then(data=>{
             console.log(data);
             setProducts(data)
         })
     }
     

     const clickCollection=(event)=>{
        
        //setCollection(event.target.value)
        setSelectedCollection(event.target.value)
        if(event.target.value==0)
        {
            loadProductsByStore(store._id)
        }
        else{
            loadProductsByCollection(event.target.value)
        }
       
     }

     

    useEffect(()=>{
        const storeId = props.match.params.storeId
        
        
        loadSingleStore(storeId)
        loadStoreCollections(storeId)
        if(selectedCollection==0)
        {
            loadProductsByStore(storeId)
        }
        else{
            loadProductsByCollection(selectedCollection)
        }
    },[props])

    const storeDetails=()=>(
        <div className="card  mt-3">
             <div class="container">
                <h4 className=" card-header bg-info text-center">{store.businessName}</h4>
                <div className="row">
                    <p className="col-6 text-center">{store.city}</p>
                    <p className="col-6 text-center">{}</p>
                </div>
                <div className="row">
                    <p className="col-6 text-center">{store.phoneNo}</p>
                    <p className="col-6 text-center">{store.email}</p>
                </div>
                <p className="text-center small">{store.address}</p>
             </div>
        </div>
    )
    /*{collections && collections.forEach((collection)=>{
        console.log("hello")
        
    })}*/
    const storeCollections=()=>(
        <div className="row flex-nowrap">
         
           <div class="col-3">
              <button onClick={clickCollection} className="btn btn-center small" value={0}>All</button>
           </div>
           {collections && collections.map((collection,i)=>(
            <div class="col-3">
              <button  onClick={clickCollection} key={i} className="btn btn-center small" value={collection._id}>{collection.name}</button>
           </div>
               

           ))}
           
       
        </div>
    )


    return(
        <div className="">
            <AdminLayout >                  
             <div className="col-11 col-md-7 mx-auto">
                
                {storeDetails()}
                
              </div>  
             <div className="overflow-auto col-11 col-md-7 mx-auto">
              {storeCollections()}
              
            </div> 
                <h3>{selectedCollection}</h3>
                {products.map((product,i)=>(
                <div  key={i} className="col-4 mb-3">
               <p>{product.name}</p>
                </div>
            ))} 
            </AdminLayout>
        </div>
        
    )
}
export default Store