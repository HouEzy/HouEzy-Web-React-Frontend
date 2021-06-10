import React,{useState,useEffect} from "react"
import {Link,withRouter} from "react-router-dom";
import {listCategories} from "../userCore/userApi"

const CategoryBar=({history})=>{

    const[categories,setCategories]=useState([])

    const imageArray=["/images/grocery.png","/images/stationary.png","/images/gift.png","/images/electronic.png","/images/accesories.png","/images/homeappliance.png"]

    const isActive=(history,path) =>{
        if(history.location.pathname === path)
        {
            return {backgroundColor:'#5BC0DE'}
        }
        else{
            return {color:"#000000"};
        }
    }

    const getCategories=()=>{
        listCategories().then(data=>{               
                setCategories(data)           
        })
     }

   const Bar=()=>(
       <div className="mx-auto">
            <div className="row flex-nowrap ">
         
        
        <div className="w-auto">
            <Link to ="/stores/all">
            <div className="col-3 mx-auto ">
            <img src="/images/all.png" className=""></img>
            </div>
            <button className="btn  btn-center small h-75 mr-2" value={0}  style={isActive(history,`/stores/all`)}>All</button>
            </Link>
         </div>
        
         {categories && categories.map((category,i)=>(
         
         <div className="w-auto">
          <Link to={`/stores/${category._id}`}>
          <div className="col-2 mx-auto">
            <img src={imageArray[i]} className=""></img>
            </div>
            <button key={i} className="btn  btn-center btn-sm mt-1" value={category._id} style={isActive(history,`/stores/${category._id}`)} >{category.name}</button>
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
       <div className="overflow-auto col-12 col-md-7 mx-auto m-0 " style={{overflow:"hidden"}}>
           {Bar()}
       </div>
   )
}
export default withRouter(CategoryBar)