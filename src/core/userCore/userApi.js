import {API} from "../../config";

export const listCategories=()=>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const listAllStores=()=>{
    return fetch(`${API}/storesbycity`,{
        method:"GET"
    })
    .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const listStoresByCategory=(categoryId)=>{
    return fetch(`${API}/stores/category/${categoryId}`,{
        method:"GET"
    })
    .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const readStore=(storeId)=>{
    return fetch(`${API}/store/${storeId}`,{
        method:"GET",
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

export const readStoreByLinkName=(storeLinkName)=>{
    return fetch(`${API}/store/bylink/${storeLinkName}`,{
        method:"GET",
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

export const listCollectionsByStore=(storeId)=>{
    return fetch(`${API}/store/collections/${storeId}`,{
        method:"GET"
    })
    .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const getProductsByCollection=(collectionId)=>{
   return fetch(`${API}/store/collection/${collectionId}/products`,{
       method:"GET"
   })
   .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const getProductsByStore=(storeId)=>{
   return fetch(`${API}/store/${storeId}/products`,{
       method:"GET"
   })
   .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   })
}

export const readProduct=(productId)=>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const searchStore=(search)=>{
    return fetch(`${API}/stores/search?search=${search}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

//CART

export const addToCart=(userId,productId,storeId)=>{
    return fetch(`${API}/user/${userId}/cart/add`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify({"productId":`${productId}`,"storeId":`${storeId}`})
    })
    .then((data)=>{
          return data.json(data)         
    })
    .catch(err=>{
          console.log(err);
    })
}

export const removeFromCart=(userId,productId)=>{
    return fetch(`${API}/user/${userId}/cart/remove`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify({"productId":`${productId}`})
    })
    .then((data)=>{
          return data.json(data)         
    })
    .catch(err=>{
          console.log(err);
    })
}

export const updateCartQuantity=(userId,productId,count)=>{
    return fetch(`${API}/user/${userId}/cart/update`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify({"productId":`${productId}`,"count":`${count}`})
    })
    .then((data)=>{
          return data.json(data)         
    })
    .catch(err=>{
          console.log(err);
    })
}

export const emptyCart=(userId)=>{
    return fetch(`${API}/user/${userId}/cart/empty`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
         
    })
    .then((data)=>{
          return data.json(data)         
    })
    .catch(err=>{
          console.log(err);
    })
}

export const getCart=(userId)=>{
    return fetch(`${API}/user/${userId}/cart/list`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const razorpayorder=cartdata=>{
    //console.log(name,email,password);
    return fetch(`${API}/razorpay`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(cartdata)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
} 

export const paymentverification=()=>{
    //console.log(name,email,password);
    return  fetch(`${API}/success`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

export const createOrder=(userId,createOrderData)=>{
    //console.log(name,email,password);
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
           
        },
        body:JSON.stringify({order:createOrderData})
        
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
} 

