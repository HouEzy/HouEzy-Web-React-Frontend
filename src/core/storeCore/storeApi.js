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

export const createCollection=(collection)=>{
    return fetch(`${API}/store/collection/create`,{
        method:"POST",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify(collection)
    })
    .then((data)=>{
        return data.json({collection})
              
        
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

export const updateCollection=(collectionId,name)=>{
    return fetch(`${API}/store/collection/update/${collectionId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
      },
      body:JSON.stringify({name:name})
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err);
    })
}

export const listUnitValues=()=>{
    return fetch(`${API}/product/unitvalues`,{
        method:"GET"
    })
    .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   }) 
}

export const createProduct=(product)=>{
    return fetch(`${API}/product/create`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                
          },
          body:product
    })
    .then((data)=>{
          return data.json({product})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}

export const updateProduct=(productId,product)=>{
    return fetch(`${API}/product/${productId}/update/`,{
          method:"PUT",
          headers:{
                Accept:"application/json",
                
          },
          body:product
    })
    .then((data)=>{
          return data.json({product})
                
          
    })
    .catch(err=>{
          console.log(err);
    })
}


export const listProductsByStore=(storeId)=>{
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

export const listProductsByCollection=(collectionId)=>{
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

export const updateStoreStatus=(storeId)=>{
    fetch(`${API}/store/${storeId}/update/status`,{
        method:"POST",
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const updateProductStatus=(productId)=>{
    fetch(`${API}/product/${productId}/update/stockstatus`,{
        method:"POST",
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const updateProductMrp=(productId,mrp)=>{
    fetch(`${API}/product/${productId}/update/mrp`,{
        method:"POST",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify(mrp)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const searchProductsInStore=(storeId,query)=>{
    return fetch(`${API}/store/${storeId}/search/products?query=${query}`,{
        method:"GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const listOrderStatusValues=()=>{
    return fetch(`${API}/order/status-values`,{
        method:"GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const readOrder=(orderId)=>{
    return fetch(`${API}/order/${orderId}`,{
        method:"GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const listOrdersByStore=(storeId)=>{
    return fetch(`${API}/order/list/store/${storeId}`,{
        method:"GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const listOrdersByStatus=(status)=>{
    return fetch(`${API}/order/list/status?status=${status}`,{
        method:"GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const updateOrderStatus=(orderId,status)=>{
    return fetch(`${API}/order/${orderId}/status`,{
        method:"PUT",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify({status})
    })
    .then((data)=>{
        return data.json()
              
        
  })
  .catch(err=>{
        console.log(err);
  })
}

export const createSubscription=data=>{
    return fetch(`${API}/subscription/create/${data.storeId}`,{
        method:"POST",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "rzpPlanId":data.planId,
            "count":data.count
        })
    })
    .then(async (response)=>{
        
        return  response.json();
    })
    .catch(err=>{
        console.log(err);
    }) 
}

export const verifySub=(verifyData)=>{
    return fetch(`${API}/subscription/verify`,{
        method:"POST",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify(verifyData)
    })
    .then((response)=>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    }) 
}

export const getSubById=(subId)=>{
    return fetch(`${API}/sub/byid/${subId}`,{
        method:"GET",
       
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

export const updateStoreSubDetails=(storeId,planId,subId)=>{
    return fetch(`${API}/store/subdetails/update/${storeId}`,{
        method:"PUT",
        headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
        },
        body:JSON.stringify({
            rzpPlanId:planId,
            rzpSubId:subId
        })
    })
    .then((response)=>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    }) 
}