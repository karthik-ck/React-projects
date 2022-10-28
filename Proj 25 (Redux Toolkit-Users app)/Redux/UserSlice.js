import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {
        id:'0',
        name:'karthik ck',
        email:'ck@gmail.com'
    },
    {
        id:'1',
        name:'Rock',
        email:'rock@gmail.com'
    }
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
           state.push(action.payload)
        },
        editUser:(state,action)=>{
            const {id,name,email}=action.payload
            const existingUser=state.find(user=> user.id === id)
            if(existingUser){
                existingUser.name=name;
                existingUser.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload
            const existingUser=state.find(user=>user.id === id)
            if(existingUser){
                return state.filter(user=>user.id !== id)
            }
        }
    }
})

export const {addUser,editUser,deleteUser}=userSlice.actions
export default userSlice.reducer
