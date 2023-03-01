import React from 'react'
import questions from "../questions"
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Radio } from '@mui/material';
import QuestionOption from '../components/QuestionOption';

const Main = () => {
  console.log(questions);
  const theme = useTheme();
  console.log(theme)
  const [currentQuestionIndex, setActiveStep] = React.useState(0);
  const maxSteps = questions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  let foundQuestion = questions[currentQuestionIndex]
  return (
    <>
      <nav className="navbar p-3 bg-body-tertiary shadow shadow-sm">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="d-flex justify-content-between gap-5">
            <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
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
          <Typography><strong>{currentQuestionIndex+1} </strong>.{questions[currentQuestionIndex].question}</Typography>
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