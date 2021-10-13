import React,{useState,useEffect} from "react"
import {Link,withRouter,Redirect} from "react-router-dom";
import {listCategories} from "../userCore/userApi"
import {Button} from "react-bootstrap"
const CategoryBar=({history})=>{

    const[categories,setCategories]=useState([])

    const imageArray=["/images/grocery.png","/images/stationary.png","/images/gift.png","/images/electronic.png","/images/accesories.png","/images/homeappliance.png"]

    const isActive=(history,path) =>{
        if(history.location.pathname === path)
        {
            return {borderBottom:"3px solid #444444" , color:"#4CA1A3",fontWeight:"bold" }
        }
        else{
            return {color:"#171717"};
        }
    }

    const getCategories=()=>{
        listCategories().then(data=>{               
                setCategories(data)           
        })
     }

     const handleClickAll=()=>(
           
            <Redirect to="/stores/all" />      
     )
     const handleClickCategory=(categoryId)=>{
         console.log("category clicked");
         return(
             <Redirect to={`/stores/${categoryId}`} />
         )
     }

   const Bar=()=>(
       <div className="mx-auto">
            <div className="row flex-nowrap ">
         
        
        <div className="w-auto" onClick={handleClickAll} onTouchStart={handleClickAll} style={{zIndex:"1"}} >
            <Link to="/stores/all">
            <div className="col-3 mx-auto ">
            
            </div>
            <button  className="btn  btn-center small h-75 mr-2" value={0}  style={isActive(history,`/stores/all`)}>All</button>
            </Link>
         </div>
        
         {categories && categories.map((category,i)=>(
         
         <div className="w-auto" style={{zIndex:"1"}}>
          <Link to={`/stores/${category._id}`}>
          <div className="col-2 mx-auto">
            
            </div>
            <button key={i}  className="btn  btn-center btn-sm mt-1" value={category._id} style={isActive(history,`/stores/${category._id}`)} >{category.name}</button>
          </Link>
         </div>
        
 
         ))}     
      </div>
       </div>
   )

   useEffect(()=>{
    getCategories()
    ;
    
   },[])

   return(
       <div className="overflow-auto col-12 col-md-7 mx-auto m-0 " style={{overflowX:"hidden"}}>
           {Bar()}
       </div>
   )
}
export default withRouter(CategoryBar)