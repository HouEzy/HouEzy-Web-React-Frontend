import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import StoreLayout from "../core/storeCore/StoreLayout"
import {isAuthenticated} from "../auth/storeAuth"
import {listCollectionsByStore,listProductsByStore,listProductsByCollection,searchProductsInStore,updateProductStatus} from "../core/storeCore/storeApi"
import SearchProducts from "../core/storeCore/SearchProducts"
import ProductCard from "../core/storeCore/ProductCard"
import StoreOpenClose from "../core/storeCore/StoreOpenClose"
import ProductImages from "../core/storeCore/ProductImages"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import AddProductModal from "../core/storeCore/AddProductModal"
import { MdSearch,MdDeleteForever,MdShare,MdEdit } from "react-icons/md";
import {Helmet} from "react-helmet"
import UpdateProduct from "../core/storeCore/UpdateProduct"


const StoreProducts=(props)=>{

    const [collections,setCollections]=useState([])
    const [selectedCollection,setSelectedCollection]=useState(0)
    const [selectedCollectionName,setSelectedCollectionName]=useState("All")
    const [products,setProducts]=useState([])
    const [run,setRun]=useState(false)

    const theme = "#00334E"


    const storeId = isAuthenticated().loggedInMember._id

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

    const handleStockUpdate=()=>{

    }


    useEffect(()=>{
        const storeId = isAuthenticated().loggedInMember._id;
        
        loadCollections(storeId)
        if(selectedCollection==0)
        {
            loadProductsByStore(storeId)
        }
        else{
            loadProductsByCollection(selectedCollection)
        }
    },[props])

    const searchbar=()=>(
        <div className="col-12">
           <form>
               <div className="input-group">
               <input  type="search" className="form-control" placeholder="Search for Products " required />
               <div className="input-group-append">
               <button className="btn btn-secondary" type="submit" ><MdSearch className="h4"/></button>
               </div>
               </div>
           </form> 
        </div>
    )

    const navshow=()=>(
        <div style={{height:"60px"}} className="d-lg-none"></div>
    )

    const headline=()=>(
        <nav className="navbar navbar-default  navbar-expand nav-primary ml-2 bg-transparent shadow-lg  " style={{zIndex:"-1"}}>
                     
                     <Link className="navbar-brand " to="/"><h4 className="text-dark" style={{zIndex:"0"}}>Products</h4></Link>
                                          
                     <ul className="navbar-nav ms-auto">
                       
                         
                     </ul>                                         
        </nav>
    )

    const level2Bar=()=>(
        <div className="row ">
          <div className="col-6 col-lg-2">
          <AddProductModal setRun={setRun} run={run} />
          </div>
          <div className="col-6 col-md-4 ms-auto"> 
          <div className="">
          {searchbar()}
          </div>
          </div>
        </div>
    )

    const ShowCollections=()=>(
        <div className="col-11 mx-auto">
            <div className="row flex-nowrap ">
         
         <div className="w-auto badge badge-pill" style={{zIndex:"0"}}>
            <button onClick={clickCollection} className="btn  btn-center small h-75 mr-2" value={0} style={{borderBottom:selectedCollection == 0 ? `5px solid #0275d8`: 'white',color:selectedCollection == 0 ? `${theme}`: 'black'}}>All</button>
         </div>
         {collections && collections.map((collection,i)=>(
          <div className="w-auto badge badge-pill" style={{zIndex:"1"}}>
            <button onClick={clickCollection}   key={i} className="btn  btn-center  small h-75 mr-3" value={collection._id} style={{borderBottom:selectedCollection == collection._id ? `5px solid #0275d8`: 'white',color:selectedCollection == collection._id ? `${theme}`: 'black'}}>{collection.name}</button>
         </div>
         ))}
         
     
      </div>
        </div>
    )

    const ShowProducts=()=>(
        <div >
           
        <div className="shadow-lg ">
           <table className="table table-striped text-center flex-nowrap ">
             <thead className="p-2">
             <tr>
                  <th scope="col">#</th>
                  <th scope="col">Img</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">InStock</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Delete</th>
             </tr>
             </thead>
             <tbody>
             {products.map((p,i)=>(
                <tr>
                  <th scope="row">{i+1}</th>
                  <td width="10%" className="my-auto" ><ProductImages  product={p} className="" /></td>
                  <td className="my-auto align-middle">{p.name}</td>
                  <td className="my-auto align-middle">₹{p.sellingPrice}<p className="text-decoration-line-through">₹{p.mrp}</p></td>
                  <td className="my-auto align-middle"><BootstrapSwitchButton onChange={()=>{updateProductStatus(p._id)}} checked={p.inStock}  size="xs"  onstyle="primary" offstyle="secondary" /></td>
                  <td className="my-auto align-middle"><span className="row"><UpdateProduct product={p}/></span></td>
                  <td className="my-auto align-middle"><MdDeleteForever className="h4 text-danger " /></td>
                </tr>   
             ))}
             </tbody>
           </table> 
        </div>
            
            
       </div>
     )
 



   return(
       <div>
       <Helmet>
           <title>Products | Bizznect</title>
           <meta name="Manage Products" content="Manage all your products here." />
       </Helmet>
        <StoreLayout>
        <div className="container col-12 p-0">
         {navshow()}
         {headline()}
         <div className=" border-top border-5 p-3">
         {level2Bar()}
         </div>

         <div className="overflow-auto col-12  mx-auto " style={{overflow:"hidden"}}>
              {ShowCollections()}
        </div>
         
        <div className="col-12 overflow-auto  ">{ShowProducts()}</div>

         </div>
        </StoreLayout>
       </div>
   )
}

export default StoreProducts