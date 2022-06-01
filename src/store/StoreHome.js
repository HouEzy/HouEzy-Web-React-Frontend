import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import { Carousel } from "react-bootstrap"
import { isAuthenticated } from "../auth/storeAuth"
import Aos from "aos"
import "aos/dist/aos.css"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"



import { AiOutlineAreaChart, AiOutlineShop, AiOutlineAntDesign } from "react-icons/ai"
import { RiSecurePaymentFill, RiProductHuntLine, RiCheckboxFill } from "react-icons/ri"
import { FaTools,FaArrowCircleRight,FaHandPointRight } from "react-icons/fa"

const StoreHome = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    

    const theme = "#00334E"

    const topNav = () => (
        <div className="sticky-top">
            <nav className="navbar navbar-default sticky-top navbar-expand nav-white bg-white  p-0 " style={{ zIndex: "1" }} >
                <Link className="navbar-brand px-2 px-md-5 row" to="/"><span className="col-4 my-auto text-center p-0"><img className="img-fluid rounded p-0" src="/images/logo-dark.png" width="50px" height="50px" /></span> <span className="p-0 col-8 my-auto" style={{color:`${theme}`,fontSize:"1.5em",fontWeight:"bold",fontFamily:" 'Roboto Slab', serif"}}>Byznex</span></Link>
                <ul className="navbar-nav ms-auto">

                    <li className="nav-item h5"><Link className="nav-link text-dark" to="/store/pricing">Pricing</Link></li>

                    <li className="nav-item h5">
                        {isAuthenticated() && isAuthenticated().loggedInMember.role == "Store" ? (<Link className="nav-link text-dark" to="/store/dashboard">SignIn</Link>) : (<Link className="nav-link text-dark" to="/store/signup">SignIn</Link>)}
                    </li>
                </ul>
            </nav>
        </div>
    )

    const opening = () => (
        <div className="row mt-4" style={{ backgroundColor: "F3F1F5",backgroundImage:"url('/images/top-bg.png')",backgroundSize:"cover" }}>
            <div className="col-12 col-md-6 align-content-right d-md-none">
                <img className="img-fluid" src="/images/seller.png"></img>
            </div>
          
           <div className="col-12 col-md-6 my-auto " >
            <div className="col-12 col-md-9 mx-auto">
            <h1 className=""  style={{ color: `${theme}`, fontSize: "3em",fontFamily:" 'Roboto Slab', serif",fontWeight:"bold" }}><Fade left>Let's Take </Fade> <Fade right>Your Business Online.</Fade></h1>
                    <br />
                   <Fade bottom>
                   <p className=" h4 text-muted ">Byznex is the easiest and most Equipped Platform to accompany your online as well as offline Business.</p>
                    <br/>
                    <div className="mx-auto text-center">
                    <Link to="/store/signup" className="px-lg-2 px-1"><span className="badge rounded-pill   px-lg-5 p-3" style={{backgroundColor:"#DDDDDD",color:`${theme}`,fontSize:"1.1em"}}>Book Demo </span></Link> 
                    <Link to="/store/signup" className="px-lg-2 px-1"><span className="badge rounded-pill text-white px-lg-5 p-3" style={{backgroundColor:`${theme}`,fontSize:"1.1em"}}>Get Started <FaArrowCircleRight className="" /></span></Link>
                    <br/>
                    <p className="text-center text-dark h5 mt-4">15 Days free Trial.</p> 
                    </div>
                   </Fade>
                    

                   
                </div>
            </div>

           <Fade right>
           <div className="col-12 col-md-6 align-content-right d-none d-md-block my-auto">
                <img className="img-fluid" src="/images/seller.png"></img>
            </div>
           </Fade>
        </div>
    )

    const benefits=()=>(
        <div>
           
            <div className="row">
                <div className="col-11 mx-auto col-md-6" >
                  <Fade left><img src="/images/management.png" width="100%" height="100%"></img></Fade>
                </div>
               <Fade right>
               <div className="col-11 mx-auto col-md-5 p-2 mt-5">
                    <div className="badge bg-success  p-2 " style={{fontFamily:"sans-serif",fontSize:"1em"}}>Business Management</div>
                    <div className="h3" style={{color:`${theme}`}}>Get Ready to manage your Business Intelligently with most intelligent Tools</div>
                    <div className="text-muted h5">Get Access to complete business tool kit scale your business to a Brand.</div>
                    <br />
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Interactive dashboard to understand your business and customer behaviour.</div>
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Along with personal website,get access to order management , inventory management etc.</div>

                </div>
               </Fade>

            </div>
            
           
            
            <div className="row mt-5">
               <div className="d-md-none col-11 mx-auto col-md-6">
                    <img src="/images/marketting.png" width="100%" height="100%"></img>
                </div>
                <Fade left>
                <div className="col-11 mx-auto col-md-5 p-2 mt-5 mx-3">
                
                
                    <div className="badge bg-danger  p-2 " style={{fontFamily:"sans-serif",fontSize:"1em"}}>Marketting</div>

                    <div className="h3" style={{color:`${theme}`}}>Reach out to tons of people who need your Products.</div>
                    <div className="text-muted h5">Take your Business out of of your locality to the world.</div>
                    <br />
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Interactive dashboard to understand your business and customer behaviour.</div>
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Along with personal website,get access to order management , inventory management etc.</div>

                </div>
                </Fade>
                <div className="d-none d-md-block col-11 mx-auto col-md-6" >
                <Fade right><img src="/images/marketting.png" width="100%" height="100%"></img></Fade>
                </div>
                
            </div>
            <div  className="row mt-5" >
                <div className="col-11 mx-auto col-md-6">
                    <Fade left><img src="/images/online-payment.png" width="100%" height="100%"></img></Fade>
                </div>
                <Fade right><div className="col-11 mx-auto col-md-5 p-2 mt-5">
                    <div className="badge bg-primary  p-2 " style={{fontFamily:"sans-serif",fontSize:"1em"}}>Online Payment</div>

                    <div className="h3" style={{color:`${theme}`}}>Collect Payments from all over India.</div>
                    <div className="text-muted h5">Integrate Payment gateway directly into your site, so that your customers can pay directly online.</div>
                    <br />
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Interactive dashboard to understand your business and customer behaviour.</div>
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Along with personal website,get access to order management , inventory management etc.</div>

                </div>
                </Fade>
            </div>
            
            <div className="row mt-5">
               <div className="d-md-none col-11 mx-auto col-md-6">
                    <img src="/images/pos.png" width="100%" height="100%"></img>
                </div>
                <Fade left><div className="col-11 mx-auto col-md-5 p-2 mt-5 mx-3" >
                    <div className="badge bg-warning text-dark  p-2 " style={{fontFamily:"sans-serif",fontSize:"1em"}}>Point of Sale(POS) Integrated</div>

                    <div className="h3" style={{color:`${theme}`}}>Get Billing tool to manage your offline Store.</div>
                    <div className="text-muted h5">Upgrade your business and automate your processes.</div>
                    <br />
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Interactive dashboard to understand your business and customer behaviour.</div>
                    <div className="h6 lead"><FaHandPointRight style={{color:`${theme}`}} /> Along with personal website,get access to order management , inventory management etc.</div>

                </div>
                </Fade>
                <div className="d-none d-md-block col-11 mx-auto col-md-6">
                    <Fade right><img src="/images/pos.png" width="100%" height="100%"></img></Fade>
                </div>
                
            </div>
        </div>
    )



    const noTech = () => (
        <div className="col-11 col-md-9 blockquote mx-auto shadow border border-3 border-dark rounded ">

            <p className="p-2 text-center text-lead   h5 " style={{ color: `${theme}`, fontFamily: "sans-serif" }}>No Need Of Any Technical Knowledge is Required to Shine Online.</p>

        </div>
    )

    const imgArray = [
        { src: "/images/mobile-s.jpg", name: "Mobile" },
        { src: "/images/accesories-s.jpg", name: "Accesories" },
        { src: "/images/clothes-s.jpg", name: "Clothes" },
        { src: "/images/stationery-s.jpg", name: "Stationery" },
        { src: "/images/gifts-s.jpg", name: "Gifts" },
        { src: "/images/sports-s.jpg", name: "Sports" }
        
    ]

    const whatDoYouSell = () => (
       <Fade bottom>
            <div style={{ backgroundColor: "#FEE2C5" }} className="">
            <div className="p-4">
                <div><p className="h2 text-dark text-center display-6" >Byznex supports all kinds of Businesses.</p><hr className="text-light " /></div>
                <div>
                    <Marquee gradient={false} direction="right" speed="70">
                        <div className="row flex-nowrap">
                            {imgArray.map((img, i) => (
                                <div className="card m-2 p-2 "  key={i} style={{width:"300px"}}>
                                    <img src={img.src} className="mx-auto" width="200px" height="200px"></img>
                                    <div className="m-2 text-center text-dark h4" >{img.name}</div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
                <hr className="text-light" />
                <div className="h4 text-DARK text-center" style={{ fontFamily: "sans-serif" }}>Be the part of Intelligent Business Community.</div>
                <div className="text-center"><Link to="/store/signup"><button className="btn btn-lg badge rounded-pill p-3 text-light" style={{backgroundColor:`${theme}`,fontSize:"1.3em"}}>Lets Get Started</button></Link></div>
            </div>
        </div>
       </Fade>
    )

    const whyImp = () => (
        <div className="col-12 ">
            <div className="row">
                <div className="col-12 col-md-6 card shadow-lg ">
                    <div className="row">
                        <div className="col-4 text-center my-auto"><img className="img-fluid rounded border border-2 border-dark p-1" src="/images/marketting.png" height="250px" width="300px" /></div>
                        <div className="col-8 col-md-8 my-auto">
                            <p className="h3 " style={{ fontFamily: "sans-serif", color: `${theme}` }}>IT is The Perfect Time to get Online.</p>
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
                            <p className="h3 " style={{ fontFamily: "sans-serif", color: `${theme}` }}>Easiest way to Get Started..</p>
                            <p className="h6"><AiOutlineAreaChart />Simple Dashboard to monitor your Store. </p>
                            <p className="h6"><AiOutlineAreaChart />Take your Business Pan India.</p>
                            <div className="card-footer h6 bg-transparent">Already 190 Million Online Shoppers in India</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const features = () => (
      <Fade bottom>
            <div className="card shadow-lg p-2" style={{ backgroundColor: "#145374" }}>
            <div className="col-12 col-md-10 mx-auto">
                <div className="card-header h3 bg-transparent text-light text-center">Most Equipped and Simplest Platform</div>
                <div className="card-body">
                    <div className="row  ">
                        <div className="h4 p-3 text-light col-6 col-md-4" ><RiSecurePaymentFill className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} /> Online Payments</div>
                        <div className="h4 p-3 text-light col-6 col-md-4"><RiProductHuntLine className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} />  Unlimited Products</div>
                        <div className="h4 p-3 text-light col-6 col-md-4"><FaTools className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} /> Business Tools</div>
                        <div className="h4 p-3 text-light col-6 col-md-4"><AiOutlineShop className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} /> Digital Dukaan</div>
                        <div className="h4 p-3 text-light col-6 col-md-4"><AiOutlineAntDesign className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} /> Design Templates</div>
                        <div className="h4 p-3 text-light col-6 col-md-4"><RiCheckboxFill className="border border-warning h1 border-2 p-1" style={{ backgroundColor: "#5588A3" }} /> Order Management</div>



                    </div>
                </div>
            </div>
        </div>
      </Fade>
    )

    const steps = () => (
        <div >
            <Fade bottom>
            <div className="h2 text-center " style={{ color: `${theme}`}}>Three steps to get into your Business Playground.</div>
            <div className="row mx-auto container">
                <div className=" col-12 col-md-4 mx-auto ">
                    <div className="col text-center"><img className="img-fluid" src="/images/step-1.png" height="300px" width="250px"></img></div>
                    <div className="col my-auto  text-center p-2 ">
                        <p className="h4">STEP 1 :</p>
                        <p className="h5">Name Your Store.</p>
                        <p className="hh6 text-muted">Enter the name of your Store so that your customers can remember you.</p>
                    </div>
                </div>

                <div className=" col-12 col-md-4 mx-auto ">
                    <div className="col text-center"><img className="img-fluid" src="/images/step-2.png" height="300px" width="250px"></img></div>
                    <div className="col my-auto  text-center p-2 ">
                        <p className="h4">STEP 2 </p>
                        <p className="h5">Add Products & Collections.</p>
                        <p className="hh6 text-muted">Add Collections and Products to your Store , so they are out there for customers to order.</p>
                    </div>
                </div>

                <div className=" col-12 col-md-4 mx-auto ">
                    <div className="col text-center"><img className="img-fluid" src="/images/step-1.png" height="300px" width="250px"></img></div>
                    <div className="col my-auto text-center  p-2 ">
                        <p className="h4">STEP 3 </p>
                        <p className="h5">Relax & Monitor your Orders.</p>
                        <p className="hh6 text-muted">Share your Online Store link with your local network , relatives so that you can increase sales.</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )

    const testimonial = () => (
        <div>
            <p className="h4 text-center">Look What our Bizznectians have to Say.</p>

            <div className="col-10 mx-auto" style={{ height: "50vh" }}>
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

    const footer = () => (
        <div className="" style={{ height: "auto", backgroundColor: `${theme}` }}>
            <br /><br />
            <div className="row">
            <div className="row col-12 col-md-3 text-center">
                <span className="col my-auto"><img className="img-fluid rounded p-0" src="/images/logo-white.png" width="100px" height="100px" /></span>
                <span className="col my-auto display-4 text-light">Byznex</span>
            </div>
            <div className="col-6 col-md-3 p-3 mt-5">
                <ul className="text-decoration-none" >
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                </ul>

            </div>
            <div className="col-6 col-md-3 p-3 mt-5">
                <ul className="text-decoration-none" >
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                </ul>

            </div>
            <div className="col-6 col-md-3 p-3 mt-5">
                
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                    <Link to="/" className="text-decoration-none"><li className="text-light h5">About</li></Link>
                

            </div>
            <p className="text-center text-white">© 2022 Byznex. All Rights Reserved.</p>
            </div>
        </div>
    )

    return (
        <div className="container-fluid p-0 overflow-auto" style={{ height: "100vh",fontFamily:" 'Roboto Slab', serif" }}>
            {topNav()}
            <div>{opening()}</div>
            <br />
            <div>{benefits()}</div>
            <br />
            <div className="mt-3">{whatDoYouSell()}</div>
            <br />
            {/*<div className="mt-4">{whyImp()}</div>*/}
            <br />
            <br />
            <div>{features()}</div>
            <br />
            <br />
            <div>{steps()}</div>
            <div>
             
            </div>
            <div>{footer()}</div>
        </div>
    )
}

export default StoreHome