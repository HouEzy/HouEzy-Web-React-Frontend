import {API} from "../../config";

export const getStores=()=>{
    return fetch(`${API}/stores`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}