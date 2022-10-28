import FetchStoreApi from "../FetchStoreApi"


export const setProduct=(product)=>{
    return({
        type:'SET_PRODUCT',
        payload:product
    })
}

export const selectedProduct=(product)=>{
    return({
        type:'SELECTED_PRODUCT',
        payload:product
    })
}

export const removeSelectedProduct=()=>{
    return({
        type:'REMOVE_SELECTED_PRODUCT'
    })
}

export const fetchProducts=()=>async(dispatch)=>{
        const response=await FetchStoreApi.get('/products')

        dispatch({
            type:'FETCH_PRODUCT',
            payload:response.data
        })
}

export const fetchProduct=(id)=>async(dispatch)=>{
    const response=await FetchStoreApi.get(`/products/${id}`)

    dispatch({
        type:'SELECTED_PRODUCT',
        payload:response.data
    })
}
