import { createSlice } from "@reduxjs/toolkit";
import questions from "../questions"

const initialState = questions
// console.log(initialState)

const questionSlice = createSlice({
    name:"question",
    initialState
})   

export default questionSlice.reducer
