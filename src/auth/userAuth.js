import {API} from "../config"


export const signup=(user)=>{
    return fetch(`${API}/user-signup`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
    })
    .then((data)=>{
          return data.json({user})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}

export const signin=(user)=>{
    return fetch(`${API}/user-signin`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
    })
    .then((data)=>{
          return data.json({user})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}