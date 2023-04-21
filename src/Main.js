import React, { useEffect } from 'react'
import "./App.css"
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


  // function ExamForm() {
    useEffect(() => {
      const handleCopy = (e) => {
        e.preventDefault();
        window.getSelection().removeAllRanges();
        alert('Copying is not allowed on this page');
      }
  
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
      }
      
      document.addEventListener('copy', handleCopy);
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        document.removeEventListener('copy', handleCopy);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  
  // }
  

  useEffect(() => {
    timeRemaining < 1 && navigate("/Submit")
  }, [timeRemaining])


  return (
    <div>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
      </Box>
      <Box className="col-12 col-sm-10 col-lg-8 m-auto mt-2 shadow p-3 bg-light rounded-4 border" sx={{ flexGrow: 1, }}>
        <Box sx={{ height: 260, width: '100%', p: 2, }}>
          <CurrentQuestionAndAnswer />
        </Box>
        <QuestionController />
      </Box>
    </div>
  )
}

export default Main