import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeRemaining: 1200, 
    timerId: null,
};
  
 export const timerSlice = createSlice({
    name: 'timer',
    initialState,

    reducers: {
      startTimer: (state) => {
        state.timeRemaining = state.timeRemaining-1
      },

      resetTimer: (state) => {
        state.timerId = null;
        state.timeRemaining = 1200;
      },
    },
  });
  
  export default timerSlice.reducer;
  export const { startTimer, stopTimer, resetTimer } = timerSlice.actions;