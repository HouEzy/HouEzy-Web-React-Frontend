import {API} from "../../config";


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