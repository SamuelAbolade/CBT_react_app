import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionControllerSlice";
import timerReducer from "./timerSlice"
import questionControllerReducer from "./questionControllerSlice";

const store = configureStore({
    reducer: {
        optionReducer,
        timerReducer,
        questionControllerReducer
    }
});
export default store