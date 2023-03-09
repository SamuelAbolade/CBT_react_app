import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, } from '../Redux/timerSlice';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import CurrentQuestion from '../components/CurrentQuestion';
import QuestionOption from '../components/QuestionOption';
import QuestionController from '../components/QuestionController';
import TopNav from '../components/TopNav';


const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { timerReducer: { timeRemaining } } = useSelector((state) => state)
  // const [left, setLeft] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(startTimer());
    }, 1000);
    return () => {
      clearInterval(intervalId)
      dispatch(resetTimer())
      // setLeft(true)
    };
  }, [dispatch]);

  useEffect(() => {
    timeRemaining < 1 && navigate("/Submit")
  }, [timeRemaining])


  return (
    <>
      <TopNav/>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
      
      </Box>
      <Box className="col-12 col-sm-10 col-lg-8 m-auto mt-2 shadow p-3 bg-light rounded-4" sx={{  flexGrow: 1, }}>
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