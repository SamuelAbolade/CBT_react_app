import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionSlice";
import timerReducer from "./timerSlice"

const store = configureStore({
    reducer: {
        optionReducer,
        timerReducer
    }
});
export default store