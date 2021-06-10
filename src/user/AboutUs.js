import React from "react"
import {Link} from "react-router-dom"
import TypeWriterEffect from 'react-typewriter-effect';


import { RiFacebookCircleFill,RiInstagramLine,RiMailAddFill } from "react-icons/ri";


const AboutUs=()=>{
    
    const aboutNav=()=>(
        <div>
            <nav className="navbar navbar-default  navbar-expand nav-primary bg-info">
                
                <Link className="navbar-brand col-3  " to="/"><h1 className="text-dark " style={{fontFamily:"serif"}}>  HouEzy.in</h1></Link>
                
               
                
                <ul className="nav nav-tabs ms-auto  ">
                    <li></li>
                </ul>
               
                                   
   </nav>
   
        </div>
    )

    const topIntro=()=>(
        <div className="mt-4 " style={{ height:"" }}>
           <img className="img-fluid" src="/images/about-top-2.png" />
        </div>
    )

    const typewriter=()=>(
        <div className="col-12 col-md-12 mx-auto  p-4 rounded mt-3 shadow-lg" >
         <p className="h4 text-dark fw-bold text-center">What we Gott For you ...</p>
            <div className="" >
            <TypeWriterEffect 
        textStyle={{
          fontFamily: 'serif',
          color: '#3F3D56',
          fontWeight: 500, 
          fontSize: '3em',
          textAlign:"center"
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Toys & Gifts..',
          'Books & Stationary...',
          'Electronics...',
          'Grocery...',
          'Accesories..',
          'Toys and Gifts...'
        ]}
        loop={true}
        nextTextDelay={2000}
        typeSpeed={50}
      />
            </div>
        </div>
    )

    const introText=()=>(
        <div className="col-12 col-md-12 mx-auto mt-3 shadow-lg mb-5 rounded" style={{}}>
           <div className="row">
           <div className="col-12 col-md-4 my-auto mx-auto text-center">
               <img src="images/about-delivery.jpg" className="rounded" width="90%"></img>
           </div>
           <div className="col-12 col-md-5 my-auto mx-auto">
           <p className="h4 text-center text-muted">HouEzy is a Hyperlocal Marketplace ,
           dealing across categories bringing the most comfortable experience of Local 
           Shopping at the ease of fingertips , without facing  heat of the sun.
           We have partnered with various stores across various categories to provide the easiest 
           and the fastest way to shop online.
           </p>
           </div>
           </div>
        </div>
    )

    const benefits=()=>(
        <div className="mt-3 shadow-lg mb-3 bg-info">
            <br/>
            <div className="text-center h4 text-white">How will it Help you ?</div>
            <br/>
            <div className="row">
                <div className="col-11 col-md-3 mx-auto card mt-2 ">
                   <div className="col-6 mx-auto">
                       <img src="images/about-access.jpg"  width="70%"></img>
                   </div>
                   <div>
                   <p className="text-center h4">Accesibility</p>
                   <p className="text-center text-muted h5">Have access to all the listed stores across the city from your Home.</p>
                   </div>
                </div>
                <div className="col-11 col-md-3 mx-auto card mt-2">
                   <div className="col-6 mx-auto">
                       <img src="images/about-time.jpg " className="" width="70%"></img>
                   </div>
                   <div>
                   <p className="text-center h4">Save Time.</p>
                   <p className="text-center text-muted h5">Why waste time roaming in market when you can get everything delivered at home.</p>
                   </div>
                </div>
                <div className="col-11 col-md-3 mx-auto card mt-2">
                   <div className="col-6 mx-auto">
                       <img src="images/about-fast.jpg"  width="70%"></img>
                   </div>
                   <div>
                   <p className="text-center h4">Rapid Delivery</p>
                   <p className="text-center text-muted h5">Get Your Products delivered superfast.Within 24 hours.</p>
                   </div>
                </div>
            </div>
            <br/>
        </div>
    )

    const contact=()=>(
        <div className="col-12 col-md-10 mx-auto mt-4 shadow-lg">
           <br/>
           <p className="text-center h1" style={{fontFamily:"serif"}}><u>Contact Us</u> </p>
           <div className="row">
               <div className="col-12 col-md-5 my-auto mx-auto text-center">
                   <img src="images/about-contact.jpg" width="80%"></img>
               </div>
               <div className=" col-12 col-md-7 my-auto mx-auto">
                   <p className="h1" style={{fontFamily:"cursive"}}>We would Love to hear from You !</p>
                   <br/>
                   <p className="text-center h4 text-muted">Email us at : contact.houezy@gmail.com</p>
                   <div className="text-center text-decoration-none">
                   <Link  className="p-4 h4 " style={{color:" #e95950"}}><RiInstagramLine /></Link>
                   <Link className="p-4 h4"><RiFacebookCircleFill/></Link>
                   <Link className="p-4 h4 text-danger"><RiMailAddFill/></Link>
                   </div>
                   <br/>

               </div>
           </div>
        </div>
    )

    const footer=()=>(
        <div className="bg-info col-12  ">
           <p></p>
           <br/>
           <div className="col-12 col-md-4 mx-auto text-center">
                <img src="/images/HouEzy-logo.png" className="d-inline rounded" height="130px" width="130px"></img>
                 <p className="h3 text-dark fst-bold font-monospace d-inline p-1"><u>HouEzy.com</u></p>
                 
                 
           </div>
           <br/>
        </div>
    )

    return(
        <div className="overflow-auto" style={{height:"100vh"}} >
            <div>
                {aboutNav()}
            </div>
            <div>
                {topIntro()}
            </div>
            <div className="">
                {typewriter()}
            </div>
            <div className="">
                {introText()}
            </div>
            <div className="">
                {benefits()}
            </div>
            <div className="">
                {contact()}
            </div>
            <div className="">
                {footer()}
            </div>
        </div>
    )
}

export default AboutUs