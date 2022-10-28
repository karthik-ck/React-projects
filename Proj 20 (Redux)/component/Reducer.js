export const Reducer=(state=0,action)=>{
    switch(action.type){
        case 'INC':
            return state+1
        case 'DEC':
            return state-1    
        default:
            return state
    }
}

export const isLogged=(state=false,action)=>{
    switch(action.type){
        case 'LOGGED_IN':
            return !state;
        default:
            return state     
    }
}