import React, { useState, useEffect } from 'react'
import questions from "../questions"
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import QuestionOption from '../components/QuestionOption';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer } from '../Redux/timerSlice';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch()
  const [currentQuestionIndex, setActiveStep] = React.useState(0);
  let foundQuestion = questions[currentQuestionIndex]
  const theme = useTheme();
  const maxSteps = questions.length;
  const { timerReducer: { timeRemaining } } = useSelector((state) => state)
  const minutes = (Math.floor(timeRemaining / 60));
  const seconds = Math.floor(timeRemaining % 60).toString().padStart(2, "0");
  const navigate = useNavigate()


  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(startTimer());
    }, 1000);
    console.log(timeRemaining)
    return () => clearInterval(intervalId);
  }, [dispatch]);
  useEffect(() => {
    timeRemaining < 1 && navigate("/Submit")
  }, [timeRemaining])



  // console.log(minutes, seconds)


  // console.log("Hello")

  // return () => {
  //   second
  // }


  const handleNext = (time) => {
    console.log(dispatch);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [timeLeft, setTimeLeft] = useState(30 * 60);
  return (
    <>
      <nav className="navbar p-3 bg-body-tertiary shadow shadow-sm">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="d-flex justify-content-between gap-5">
            <span className="nav-link active fw-bold" aria-current="page" ><AccessAlarmIcon /> {minutes + ":" + seconds}</span>
            <a className="nav-link" href="signup">SUBMIT</a>
          </div>
        </div>
      </nav>
      <Box className="col-10 col-lg-8 m-auto mt-5" sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography><strong>{currentQuestionIndex + 1} </strong>.{questions[currentQuestionIndex].question}</Typography>
        </Paper>

        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
          <QuestionOption currentQuestionIndex={currentQuestionIndex} foundQuestion={foundQuestion} />
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={currentQuestionIndex}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={currentQuestionIndex === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={currentQuestionIndex === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  )
}

export default Main