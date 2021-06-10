import React from "react"
import {Link} from "react-router-dom";



const Footer=()=>{

    const footerBlock=()=>(
        <div className="bg-info" style={{}}>

        <div className="col-9 mx-auto">
        <br />
        <div className="row">
           <div className="col-12 col-md-6 mx-auto">
                <img src="/images/HouEzy-logo.png" className="d-inline rounded" height="130px" width="130px"></img>
                 <p className="h3 text-dark fst-bold font-monospace d-inline p-1"><u>HouEzy.com</u></p>
                 
                 
           </div>
            <div className="col-6 col-md-3 mx-auto">
                  
                  <ul className="list-group"> 
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>About Us</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Carrers</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Terms and Conditions</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Privacy Policy</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>HouEzy For Sellers</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>HouEzy For Delivery Partners</li></Link>
                  </ul>
            </div>
            <div className="col-6 col-md-3 mx-auto">
                 <p className="h4">Get in Touch</p>
                 <ul className="list-group"> 
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Email</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Instagram</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>Facebook</li></Link>
                     <Link className="text-dark text-decoration-none fst-italic fs-5"><li>LinkedIn</li></Link>
                  </ul>
            </div>
        </div>

        </div>
        <br/>

        <div className="text-center">
            <p>© 2021 HouEzy.com</p>
        </div>
        </div>
    )

    return(
        <div className="">
            {footerBlock()}
        </div>
    )
}

export default Footer