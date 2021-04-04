import {API} from "../config"

export const signup=(store)=>{
    return fetch(`${API}/store-signup`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(store)
    })
    .then((data)=>{
          return data.json({store})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}

export const signin=(store)=>{
      return fetch(`${API}/store-signin`,{
            method:"POST",
            headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
            },
            body:JSON.stringify(store)
      })
      .then((data)=>{
            return data.json({store})
                  
            
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
