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

export const read=(storeId)=>{
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

export const createCategory=(adminId,token,category)=>{
    return fetch(`${API}/category/create/${adminId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response =>{
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

export const productPhotos=(productId)=>{
    return fetch(`${API}/product/photo/${productId}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

