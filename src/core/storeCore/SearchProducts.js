import React from "react"

const SearchProducts=()=>{
    return(
        <div className="">
            <form>
            <span className="input-group-text bg-info" style={{border:"none"}}>
                <div className="input-group" >
                    
                    <input
                       type="search"
                       className="form-control"
                       
                       placeholder="Search Products"                    
                    />
                </div>
                <div className="btn input-group-append" style={{border:"none"}}>
                    <button className=" input-group-text">Search</button>
                </div>
            </span>
        </form>
        </div>
    )
}

export default SearchProducts