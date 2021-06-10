import React,{useState,useEffect} from "react"
import StoreLayout from "../core/storeCore/StoreLayout"
import {isAuthenticated} from "../auth/storeAuth"
import {listCollectionsByStore,listProductsByStore,listProductsByCollection,searchProductsInStore} from "../core/storeCore/storeApi"
import SearchProducts from "../core/storeCore/SearchProducts"
import ProductCard from "../core/storeCore/ProductCard"
import StoreOpenClose from "../core/storeCore/StoreOpenClose"

const StoreProducts=(props)=>{

    const[collections,setCollections]=useState([])
    const[selectedCollection,setSelectedCollection]=useState(0)
    const[selectedCollectionName,setSelectedCollectionName]=useState("All")
    const [products,setProducts]=useState([])
    const [search,setSearch]=useState("")
    const [searchResult,setSearchResult]=useState([])

    const storeId=isAuthenticated().loggedInMember._id

    const getCollections=storeId=>{
       listCollectionsByStore(storeId).then(data=>{
           if(data.error)
           {
               console.log(data.error);
           }
           else{
               
               setCollections(data)
           }
       })
    }

   

    const loadProductsByStore=(storeId)=>{
        listProductsByStore(storeId).then(data=>{
            setProducts(data)
        
        })
    }
    
    const loadProductsByCollection=(collectionId)=>{
        listProductsByCollection(collectionId).then(data=>{
             setProducts(data)
             
        })
    }

    const clickCollection=(event)=>{
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

    const handleSearch=(event)=>{
       
         setSearch(event.target.value)
    }

    const clickSearch=(e)=>{
        e.preventDefault();
        console.log(search);
        searchProductsInStore(storeId,search).then(data=>{
             
             
             setSearchResult(data)
        })
    }
    
    const displayCollections=()=>(
        <div className="row flex-nowrap">
         
        <div className="w-auto">
           <button onClick={clickCollection} className="btn  btn-center small h-75 mr-2" value={0}>All</button>
        </div>
        {collections && collections.map((collection,i)=>(
         <div className="w-auto">
           <button onClick={clickCollection}   key={i} className="btn  btn-center small h-75 mr-3" value={collection._id}>{collection.name}</button>
        </div>
            

        ))}
        
    
     </div>
    )

    const searchForm=()=>(
        <div className="">
            <form onSubmit={clickSearch}>
            <span className="input-group-text bg-info" style={{border:"none"}}>
                <div className="input-group" >
                    
                    <input
                       onChange={handleSearch}
                       type="search"
                       className="form-control"
                       value={search}
                       placeholder="Search Products"  
                       required                  
                    />
                </div>
                <div className="btn input-group-append" style={{border:"none"}}>
                    <button className=" input-group-text">Search</button>
                </div>
            </span>
        </form>
        </div>
    )

    const displaySearchResult=()=>{
        if(searchResult.length>0){
            return(
                <div  className="col-md-11 mx-auto"  >
                <p className="h4">{ searchResult.length>0?`Found ${searchResult.length} Products` : `No Products Found`}</p>
                <div className="row ">
                    {searchResult.map((product,i)=>(
                       <div key={i} className="col-12 col-md-5 mx-auto  mb-3 mr-4 p-0 shadow-lg">
                       <ProductCard  product={product} />
                       </div>
                    ))}
                </div>
                <hr className="text-dark" />
                </div>
            )
        }
        
    }

    useEffect(()=>{
        const storeId=isAuthenticated().loggedInMember._id;
        getCollections(storeId)
        if(selectedCollection==0)
        {
            loadProductsByStore(storeId)
        }
        else{
            loadProductsByCollection(selectedCollection)
        }
    },[props])

    
   return(
       <div >
           <StoreLayout >
              <div className="col-12 bg-info">
                <div className="mx-auto col-11 col-md-7  ">{searchForm()}</div>
              </div>
              <div className="col-12 mx-auto bg-white">           
                   <div className="overflow-auto col-12 col-md-7 mx-auto  mb-2 ">{displayCollections()}</div> 
               </div>
            
            
               
               <div  className="col-md-11 mx-auto" style={{height: "80vh",overflowY:"scroll"}} >

               {searchResult && <div>{displaySearchResult()}</div>}

               <h4 className="mt-2 mb-2">{selectedCollectionName}</h4>
               <div className="row mt-2">
                   
                   {products.map((product,i)=>(
                      <div key={i} className="col-12 col-md-5 mx-auto  mb-3 mr-4 p-0 shadow-lg">
                      <ProductCard  product={product} />
                      </div>
                   ))}
               </div>
               </div>
           </StoreLayout>
       </div>
   )
}

export default StoreProducts