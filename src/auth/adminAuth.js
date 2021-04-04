import {API} from "../config"

export const signup=(admin)=>{
    return fetch(`${API}/admin-signup`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(admin)
    })
    .then((data)=>{
          return data.json({admin})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}

export const signin=(admin)=>{
    return fetch(`${API}/admin-signin`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(admin)
    })
    .then((data)=>{
          return data.json({admin})
                
          
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
            
            return fetch(`${API}/admin-signout`,{
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