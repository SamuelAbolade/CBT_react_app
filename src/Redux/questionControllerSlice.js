import { createSlice } from "@reduxjs/toolkit";
import questions from "../questions"

const initialState = {
    questions,
    currentQuestionIndex:0,
}

const questionControllerSlice = createSlice({
    name:"controlSlice",
    initialState,
    reducers:{
        handleNext:(state) => {
            state.currentQuestionIndex = state.currentQuestionIndex+1
        },
        
        handleBack:(state) => {
            state.currentQuestionIndex = state.currentQuestionIndex-1
        },
    }
})
export const {handleNext, handleBack} = questionControllerSlice.actions
export default questionControllerSlice.reducer
