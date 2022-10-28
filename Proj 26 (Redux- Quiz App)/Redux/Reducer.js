const initialState={
    que_category:"",
    que_difficulty:"",
    que_type:"",
    amount_of_que:50,
    score:0
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return {...state,que_category:action.payload}
        case 'CHANGE_DIFFICULTY':
            return {...state,que_difficulty:action.payload}   
        case 'CHANGE_TYPE':
            return {...state,que_type:action.payload}
        case 'CHANGE_AMOUNT':
            return {...state,amount_of_que:action.payload}
        case 'CHANGE_SCORE':
            return {...state,score:action.payload}                         
        default:
            return state
    }
}

export default reducer