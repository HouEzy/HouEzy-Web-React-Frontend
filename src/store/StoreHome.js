import React from "react"
import {Link} from "react-router-dom"
import Marquee from "react-fast-marquee"
import {Carousel} from "react-bootstrap"

import {AiOutlineAreaChart,AiOutlineShop,AiOutlineAntDesign} from "react-icons/ai"
import {RiSecurePaymentFill,RiProductHuntLine,RiCheckboxFill} from "react-icons/ri"
import {FaTools} from "react-icons/fa"

const StoreHome=()=>{

    const theme="#00334E"

    const topNav=()=>(
        <div className="sticky-top">
             <nav className="navbar navbar-default sticky-top navbar-expand nav-white bg-white shadow-lg p-0 " style={{zIndex:"1"}} >                
                 <Link className="navbar-brand px-1" to="/"><img className="img-fluid rounded p-0" src="/images/BIZZNECT-logo-c.png" width="200px" height="80px"/></Link>                 
                 <ul className="navbar-nav ms-auto"> 
                 
                     <li className="nav-item"><Link className="nav-link text-dark" to="/store/pricing">Pricing</Link></li>
                   
                      <li className="nav-item">
                        <Link className="nav-link text-dark" to="/store/signup">Sign up/In</Link>
                     </li>                     
                 </ul>                                     
            </nav>
        </div>
    )

    const opening=()=>(
        <div className="row mt-4" style={{backgroundColor:"F3F1F5"}}>
           <div className="col-12 col-md-6 align-content-right d-md-none">
               <img className="img-fluid" src="/images/seller.png"></img>
           </div>
           <div className="col-12 col-md-6 my-auto ">
              <div className="col-12 col-md-9 mx-auto">
              <h1 className="" style={{color:`${theme}`,fontSize:"3em"}}>Take Your Store Online.</h1>  
              <p className="h5 text-muted">Lets Connect Your Store to Internet</p>
                <br/>
               <p className=" h4 text-muted ">Bizznect is the easiest and most Equipped Platform to accompany your online Journey.</p>
               <Link to="/store/signup"><button className=" mt-3 col-12 btn btn-lg btn-block text-light" style={{backgroundColor:`${theme}`}}>Get Started</button></Link>
               <br/>
               <p className="text-center text-muted">15 Day free Trial.</p>
              </div>
           </div>
           <div className="col-12 col-md-6 align-content-right d-none d-md-block my-auto">
               <img className="img-fluid" src="/images/seller.png"></img>
           </div>
        </div>
    )

    const noTech=()=>(
        <div className="col-11 col-md-9 blockquote mx-auto shadow border border-3 border-dark rounded ">
            
               <p className="p-2 text-center text-lead   h5 " style={{color:`${theme}`,fontFamily:"sans-serif"}}>No Need Of Any Technical Knowledge is Required to Shine Online.</p>
            
        </div>
    )

    const imgArray=[
        {src:"/images/mobile-s.jpg",name:"Mobile"},
        {src:"/images/accesories-s.jpg",name:"Accesories"},
        {src:"/images/clothes-s.jpg",name:"Clothes"},
        {src:"/images/stationery-s.jpg",name:"Stationery"},
        {src:"/images/gifts-s.jpg",name:"Gifts"},
        {src:"/images/sports-s.jpg",name:"Sports"}
    ]
   
    const whatDoYouSell=()=>(
        <div style={{backgroundColor:"#145374"}} className="">
           <div className="p-4">
           <div><p className="h2 text-light text-center" style={{fontFamily:"sans-serif"}}>What Does Your Business Offer ?</p><hr className="text-light "/></div>
           <div>
               <Marquee gradient={false} direction="right" speed="150">
                   <div className="row flex-nowrap">
                      {imgArray.map((img,i)=>(
                        <div className=" p-2  col-2 text-center" key={i}>
                           <img src={img.src} className="col-9 mx-auto rounded border border-2 border-light p-1" width="200px" height="200px"></img>
                           <div className="card-footer text-center text-light h6" style={{backgroundColor:`${theme}`}}>{img.name}</div>
                       </div>
                      ))}
                   </div>
               </Marquee>
           </div>
           <hr className="text-light"/>
           <div className="h4 text-light text-center" style={{fontFamily:"sans-serif"}}>Congrats !! We Got all Covered.</div>
           <div className="text-center"><Link to="/store/signup"><button className="btn btn-lg btn-light">Lets Get Started</button></Link></div>
           </div>
        </div>
    )

    const whyImp=()=>(
       <div className="col-12 ">
            <div className="row">
            <div className="col-12 col-md-6 card shadow-lg ">
            <div className="row">
                <div className="col-4 text-center my-auto"><img className="img-fluid rounded border border-2 border-dark p-1" src="/images/whyImp-s.jpg" height="250px" width="300px" /></div>
                <div className="col-8 col-md-8 my-auto">
                    <p className="h3 " style={{fontFamily:"sans-serif",color:`${theme}`}}>IT is The Perfect Time to get Online.</p>
                    <p className="h6"><AiOutlineAreaChart />Increase your Reach to wider Audience. </p>
                    <p className="h6"><AiOutlineAreaChart />Outgrow Your Competition. </p>
                     <div className="card-footer h6 bg-transparent">Already 190 Million Online Shoppers in India</div>
                    
                </div>
            </div>
            </div>

            <div className="d-none d-md-block col-md-5 mx-auto p-1 my-auto border border-warning border-3 shadow-lg">
                <blockquote className="blockquote text-center">
                   <p className="lead ">You can’t wait for customers to come to you. You have to figure out where they are, go there and drag them back to your store</p>
                   <footer className="blockquote-footer">Paul Graham <cite title="Source Title">, YCombinator</cite></footer>
                </blockquote>
            </div>
            </div>

            <div className="row">
            <div className="d-none d-md-block col-md-5 mx-auto p-1 my-auto border border-warning border-3 shadow-lg">
                <blockquote className="blockquote text-center">
                   <p className="lead ">You can’t wait for customers to come to you. You have to figure out where they are, go there and drag them back to your store</p>
                   <footer className="blockquote-footer">Paul Graham <cite title="Source Title">, YCombinator</cite></footer>
                </blockquote>
            </div>
            <div className="col-12 col-md-6 card shadow-lg ms-auto">
            <div className="row">
                <div className="col-4 text-center my-auto"><img className="img-fluid rounded border border-2 border-dark p-1" src="/images/getStarted-s.jpg" height="250px" width="300px" /></div>
                <div className="col-8 col-md-8 my-auto">
                    <p className="h3 " style={{fontFamily:"sans-serif",color:`${theme}`}}>Easiest way to Get Started..</p>
                    <p className="h6"><AiOutlineAreaChart />Simple Dashboard to monitor your Store. </p>
                    <p className="h6"><AiOutlineAreaChart />Take your Business Pan India.</p>
                     <div className="card-footer h6 bg-transparent">Already 190 Million Online Shoppers in India</div>
                    
                </div>
            </div>
        </div>
            </div>
       </div>
    )

    const features=()=>(
        <div className="card shadow-lg p-2" style={{backgroundColor:"#145374"}}>
          <div className="col-12 col-md-10 mx-auto">
          <div className="card-header h3 bg-transparent text-light text-center">Most Equipped and Simplest Platform</div>
           <div className="card-body">
               <div className="row  ">
                   <div className="h4 p-3 text-light col-6 col-md-4"><RiSecurePaymentFill className="border border-warning h1 border-2 p-1" style={{backgroundColor:"#5588A3"}} /> Online Payments</div>
                   <div className="h4 p-3 text-light col-6 col-md-4"><RiProductHuntLine className="border border-warning h1 border-2 p-1" style={{backgroundColor:"#5588A3"}} />  Unlimited Products</div>
                   <div className="h4 p-3 text-light col-6 col-md-4"><FaTools className="border border-warning h1 border-2 p-1" style={{backgroundColor:"#5588A3"}} /> Business Tools</div>
                   <div className="h4 p-3 text-light col-6 col-md-4"><AiOutlineShop className="border border-warning h1 border-2 p-1" style={{backgroundColor:"#5588A3"}} /> Digital Dukaan</div>
                   <div className="h4 p-3 text-light col-6 col-md-4"><AiOutlineAntDesign className="border border-warning h1 border-2 p-1"  style={{backgroundColor:"#5588A3"}}/> Design Templates</div>
                   <div className="h4 p-3 text-light col-6 col-md-4"><RiCheckboxFill className="border border-warning h1 border-2 p-1" style={{backgroundColor:"#5588A3"}} /> Order Management</div>



               </div>
           </div>
          </div>
        </div>
    )

    const steps=()=>(
        <div >
            <div className="h2 text-center " style={{color:`${theme}`,fontFamily:"revert"}}>You'r just 3 steps away from your Business Playground.</div>
            <div className="container">
                <div className="row col-12 col-md-7 mx-auto ">
                <div className="col"><img className="img-fluid" src="/images/step-1.png" height="300px" width="250px"></img></div>
                 <div className="col my-auto card shadow p-2 ">
                     <p className="h4">STEP 1 :</p>
                     <p className="h5">Name Your Store.</p>
                     <p className="hh6 text-muted">Enter the name of your Store so that your customers can remember you.</p>
                 </div>
                </div>

                <div className="row col-12 col-md-7 mx-auto ">
                <div className="col"><img className="img-fluid" src="/images/step-2.png" height="300px" width="250px"></img></div>
                 <div className="col my-auto card shadow p-2 ">
                     <p className="h4">STEP 2 :</p>
                     <p className="h5">Add Products & Collections.</p>
                     <p className="hh6 text-muted">Add Collections and Products to your Store , so they are out there for customers to order.</p>
                 </div>
                </div>

                <div className="row col-12 col-md-7 mx-auto ">
                <div className="col"><img className="img-fluid" src="/images/step-1.png" height="300px" width="250px"></img></div>
                 <div className="col my-auto card shadow p-2 ">
                     <p className="h4">STEP 3 :</p>
                     <p className="h5">Relax & Monitor your Orders.</p>
                     <p className="hh6 text-muted">Share your Online Store link with your local network , relatives so that you can increase sales.</p>
                 </div>
                </div>
            </div>
        </div>
    )

    const testimonial=()=>(
        <div>
           <p className="h4 text-center">Look What our Bizznectians have to Say.</p>

           <div className="col-10 mx-auto" style={{height:"50vh"}}>
           <Carousel variant="dark" className="mt-4">
              <Carousel.Item interval={1000}>
                
                <Carousel.Caption className="carousel-caption">
                  <h3>First slide label</h3>
                  <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
    </div>
           
        </div>
    )

    const footer=()=>(
        <div className="" style={{height:"60vh",backgroundColor:`${theme}`}}>
             <br/><br/>
            <div className=" col-12 col-md-4 text-center">
            <img className="img-fluid rounded p-0" src="/images/BIZZNECT-logo-white.png" width="300px" height="100px"/>
            </div>
        </div>
    )

    return(
        <div className="container-fluid p-0 overflow-auto" style={{height:"100vh"}}> 
            {topNav()} 
            <div>{opening()}</div>
            <br/>
             <div className="mt-3">{noTech()}</div>  
             <br/> 
             <div className="mt-3">{whatDoYouSell()}</div>
             <br/>
             <div className="mt-4">{whyImp()}</div>
             <br/>  
             <br/>
             <div>{features()}</div>  
             <br/>
             <br/> 
             <div>{steps()}</div> 
             <div>
                
             </div>
             <div>{footer()}</div>       
        </div>
    )
}

export default StoreHome