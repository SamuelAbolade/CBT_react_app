import { createSlice } from "@reduxjs/toolkit";
import questions from '../questions'

export const optionSlice = createSlice({
    name:"option",
    initialState: {
        chosenOption:null,
        selectedOptions: Array(questions.length).fill(null)
    },

    reducers:{
        toggleChoice: (state, action) => {
            state.chosenOption = action.payload
        },
        pushToUserAnswers: (state, action)=>{
            state.selectedOptions[action.payload] = state.chosenOption
        },
        resetSelectedOptions: (state)=>{
            (state.selectedOptions) = Array(questions.length).fill(null)
        }
    }
})
export default optionSlice.reducer
export const { toggleChoice, pushToUserAnswers, resetSelectedOptions } = optionSlice.actions