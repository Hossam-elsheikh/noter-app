import { createSlice } from "@reduxjs/toolkit";
const initialState = {activeForm: 'note',modalVisible: false}
export const formSlice= createSlice(
    {
        name:'form',
        initialState,
        reducers:{
            setActiveForm :(state,action) =>{
                state.activeForm = action.payload
            },
            showModal :(state) =>{
                state.modalVisible = !state.modalVisible
            }
        }
    }
)

export const {setActiveForm,showModal} = formSlice.actions;
export default formSlice.reducer