import { ActionType } from "./ActionType"

export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:ActionType.SELCTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:ActionType.REMOVE_SELCTED_PRODUCTS
    }
}