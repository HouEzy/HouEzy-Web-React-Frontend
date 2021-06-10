import React from "react"
import { MdLocationOn } from "react-icons/md";


const UserCity=()=>{

    const showUserCity=()=>(
        <div className="input-group">
           <div className="input-group-prepend"><span className="input-group-text bg-info" id="basic-addon1"><MdLocationOn className="h5"/></span></div>
            <select className="form-select" aria-label="Default select example"  value="Aurangabad">
              <option className="small" >Aurangabad</option>
              </select>
        </div>
    )

    return(
        <div className="">
            {showUserCity()}
        </div>
    )

}

export default UserCity