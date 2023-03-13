import React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { handleNext, handleBack, handlePaginationChange } from '../Redux/questionControllerSlice';
import Pagination from '@mui/material/Pagination';


const QuestionController = () => {
    const dispatch = useDispatch()
    const { questionControllerReducer: { questions, currentQuestionIndex } } = useSelector((state) => (state));
    const maxSteps = questions.length
    const theme = useTheme()

    const next = () => {
        dispatch(handleNext())
    }
    const back = () => {
        dispatch(handleBack())
    }
    const handleChange=(event, value)=>{
        dispatch(handlePaginationChange(value-1))
    }
    return (
        <>
        <div className='d-flex justify-content-evenly mb-3'>
            <Button size="small" onClick={back} disabled={currentQuestionIndex === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                Prev
            </Button>
                <Pagination size='small' className='' count={maxSteps} hideNextButton hidePrevButton page={currentQuestionIndex+1} siblingCount={1} onChange={handleChange} variant="outlined" shape="rounded" />
            <Button
                size="small"
                onClick={next}
                disabled={currentQuestionIndex === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </Button>
        </div>
            {/* /> */}
            {/* <Pagination setActiveCurrentQuestionIndex={setActiveCurrentQuestionIndex} /> */}
        </>
    )
}

export default QuestionController