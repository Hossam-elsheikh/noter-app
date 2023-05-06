import { createSlice } from "@reduxjs/toolkit";
const initialState = {activeForm: 'note'}
export const formSlice= createSlice(
    {
        name:'form',
        initialState,
        reducers:{
            setActiveForm :(state,action) =>{
                state.activeForm = action.payload
            }
        }
    }
)

export const {setActiveForm} = formSlice.actions;
export default formSlice.reducer