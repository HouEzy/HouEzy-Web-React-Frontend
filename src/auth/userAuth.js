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

export const authenticate=(data,next)=>{
      if(typeof window !== "undefined")
      {
          localStorage.setItem("jwt",JSON.stringify(data))
   
          next();
      }
   }
   
   export const signout=()=>{
         if (typeof window !== "undefined")
         {
               localStorage.removeItem("jwt");
               localStorage.removeItem("storeStatus");
               
               return fetch(`${API}/store-signout`,{
                     method:"GET",
               })
               .then(response=>{
                     console.log("signout",response);
               })
               .catch(err => {console.log(err);})
         }
   }
 
   export const isAuthenticated=()=>{
       if(typeof window =="undefined")
       {
           return false
       }
       if(localStorage.getItem("jwt")){
           return JSON.parse(localStorage.getItem("jwt"))
       }else {
           return false;
       }
   }
 