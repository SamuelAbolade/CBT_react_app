import React, { useState, useEffect } from 'react'
import questions from "../questions"
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, } from '../Redux/timerSlice';
import { resetSelectedOptions } from '../Redux/optionControllerSlice';
import ConfirmSubmitDialog from '../components/ConfirmSubmitDialog';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import CurrentQuestion from '../components/CurrentQuestion';
import QuestionOption from '../components/QuestionOption';
import QuestionController from '../components/QuestionController';


const Main = () => {
  const dispatch = useDispatch()
  const theme = useTheme();
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
      <Box className="col-11 col-lg-8 m-auto mt-5 border rounded-4" sx={{ flexGrow: 1, }}>
        <Box sx={{ height: 270, width: '100%', p: 2, }}>
        <CurrentQuestion/>
        <QuestionOption />
        <QuestionController />
        </Box>
      </Box>
    </>
  )
}

export default Main