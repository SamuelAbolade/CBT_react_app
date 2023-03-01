import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeRemaining: 10, // 30 minutes in seconds
    timerId: null,
};
  
 export const timerSlice = createSlice({
    name: 'timer',
    initialState,

    reducers: {
      startTimer: (state) => {
        state.timeRemaining = state.timeRemaining-1
      },
      // stopTimer: (state) => {
      //   clearInterval(state.timerId);
      //   state.timerId = null;
      // },
    //   resetTimer: (state) => {
    //     clearInterval(state.timerId);
    //     state.timerId = null;
    //     state.timeRemaining = 1800;
    //   },
    },
  });
  
  export default timerSlice.reducer;
  export const { startTimer, stopTimer, resetTimer } = timerSlice.actions;
  
  