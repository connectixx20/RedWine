import { createSlice } from "@reduxjs/toolkit";


const utilSlice=createSlice({
    name:"util",
    initialState:{
        winWidth:0,
        form:false
    },
    reducers:{
        setwinWidth:(state,action)=>{
            state.winWidth=action.payload
        },
        setShowRegister:(state,action)=>{
            state.form=action.payload
        }
    }
})

export const {setwinWidth,setShowRegister}=utilSlice.actions

export default utilSlice