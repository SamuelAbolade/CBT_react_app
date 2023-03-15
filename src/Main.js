import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, } from './Redux/timerSlice';
import { useNavigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import QuestionController from './components/QuestionController';
import CurrentQuestionAndAnswer from './components/CurrentQuestionAndOption';


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

      </Box>
      <Box className="col-12 col-sm-10 col-lg-8 m-auto mt-2 shadow p-3 bg-light rounded-4 border" sx={{ flexGrow: 1, }}>
        <Box sx={{ height: 260, width: '100%', p: 2, }}>
          <CurrentQuestionAndAnswer/>
        </Box>
        <QuestionController />
      </Box>
      <div className="attribution">
        <p>Coded by <a href="https://github.com/techie-sam" target="_blank" rel="noreferrer">Techie Sam</a></p>
      </div>
    </>
  )
}

export default Main