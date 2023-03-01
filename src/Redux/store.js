import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionSlice";

const store = configureStore({
    reducer:{
optionReducer
    }
})
export default store