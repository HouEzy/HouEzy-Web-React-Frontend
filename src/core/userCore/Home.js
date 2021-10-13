import React,{useState,useEffect} from "react"
import UserLayout from "../userCore/UserLayout"
import StoreCard from "./StoreCard"
import {Link} from "react-router-dom"
import ToastMessage from "./ToastMessage"
import {Accordion,Card,Carousel} from "react-bootstrap"
import {listStoresByCategory,listAllStores} from "./userApi"

const Home=(props)=>{ 
  
   const [stores,setStores]=useState([])
   const [featuredStore,setFeaturedStore]=useState([])
   const [grocery,setGrocery]=useState([])
   const [stationary,setStationary]=useState([])
   const [gifts,setGifts]=useState([])
   const [electronics,setElectronics]=useState([])
   const [accesories,setAccesories]=useState([])
   const [home,setHome]=useState([])

   
   const loadStores=()=>{
      listAllStores().then(data=>{
         if(data)
         {
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                console.log("stores");
                setStores(data)
            }
         }
      })
  }

  useEffect(()=>{

   loadStores()
  },[props])


  const showTopPicks=()=>(
   <div className="mx-auto mt-4">
   <h3 className=""><u>Top Picks</u></h3>
   <div className="row flex-nowrap ">
       
       {stores && stores.map((store,i)=>(
         
         <div className="col-12 col-md-4">
         <div className="w-auto">
         
               <div key={i} className="col-12 col-md-12 mx-auto  mb-3 mr-2 p-0 shadow-lg">
                      <StoreCard  store={store} />
                </div>
          
         </div>
        
 
         </div>
         ))}
      
       
   </div>
   </div>
  )

   

   const bannerCarousel=()=>(
      <div className="">
         <Carousel indicators="false">
  <Carousel.Item interval="2000">
    <img
      className="d-block w-100"
      src="images/banner-2.png"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval="2000">
    <img
      className="d-block w-100"
      src="images/banner-3.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item interval="2000">
    <img
      className="d-block w-100"
      src="images/banner-1.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      </div>
   )

   return(
      <div className="overflow-auto" style={{height:"100vh"}} >
         <UserLayout >
          <div className="mt-3">
             {bannerCarousel()}
          </div>
          <div className="overflow-auto col-12 col-md-11 mx-auto m-0 " style={{overflow:"hidden"}}>
             {showTopPicks()}
          </div>
          <div className="overflow-auto col-12 col-md-11 mx-auto m-0 " style={{overflow:"hidden"}}>
             {showTopPicks()}
          </div>
          <div className="overflow-auto col-12 col-md-11 mx-auto m-0 " style={{overflow:"hidden"}}>
             {showTopPicks()}
          </div>
          <div className="overflow-auto col-12 col-md-11 mx-auto m-0 " style={{overflow:"hidden"}}>
             {showTopPicks()}
          </div>
          <div className="overflow-auto col-12 col-md-11 mx-auto m-0 " style={{overflow:"hidden"}}>
             {showTopPicks()}
          </div>
         <div style={{position:"relative"}}>
         <ToastMessage />
         </div>
         </UserLayout>
      </div>
   )
   
}

export default Home;