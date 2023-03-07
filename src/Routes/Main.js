import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, } from '../Redux/timerSlice';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import CurrentQuestion from '../components/CurrentQuestion';
import QuestionOption from '../components/QuestionOption';
import QuestionController from '../components/QuestionController';


const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { timerReducer: { timeRemaining } } = useSelector((state) => state)


  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(startTimer());
    }, 1000);
    return () => {
      clearInterval(intervalId)
      dispatch(resetTimer())
    };
  }, [dispatch]);

  useEffect(() => {
    timeRemaining < 1 && navigate("/Submit")
  }, [timeRemaining])

  return (
    <>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quizzer
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
          </Typography>
          
        </Toolbar>
      </AppBar> */}

      </Box>
      <Box className="col-11 col-lg-8 m-auto mt-5 rounded-4" sx={{ border:2, borderColor:"#A527A8", flexGrow: 1, }}>
        <Box sx={{ height: 260, width: '100%', p: 2, }}>
          <CurrentQuestion />
          <QuestionOption />
        </Box>
          <Box className=""><QuestionController /></Box>
      </Box>
    </>
  )
}

export default Main