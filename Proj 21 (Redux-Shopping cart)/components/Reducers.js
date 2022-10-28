import { ActionType } from "./ActionType"

const initialState={
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state       
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionType.SELCTED_PRODUCTS:
            return {...state,...payload}
        case ActionType.REMOVE_SELCTED_PRODUCTS:
            return {}    
        default:
            return state;    
    }
}