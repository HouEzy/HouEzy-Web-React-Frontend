import React from "react"
import {API} from "../../config"


const StoreImage = ({store})=>{
    const photo=`${API}/store/${store._id}/photo`
    
    return(
          <div className="d-flex align-items-center justify-content-center">
             <img src={photo} className="img-fluid"  height="100%" width="100%"  />
          </div>
        
    )
}

export default StoreImage;