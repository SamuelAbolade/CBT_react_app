import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionControllerSlice";
import timerReducer from "./timerSlice"
import questionReducer from "./questionSlice"
import questionControllerReducer from "./questionControllerSlice";

const store = configureStore({
    reducer: {
        optionReducer,
        timerReducer,
        questionReducer,
        questionControllerReducer
    }
});
export default store