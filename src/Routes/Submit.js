import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import questions from "../questions"
import { resetSelectedOptions } from '../Redux/optionSlice'

const Submit = () => {
  const { optionReducer: { selectedOptions } } = useSelector((state) => (state))
  const dispatch = useDispatch()
  // useEffect(() => {
  //   
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [])
  
  const correctScore = questions.filter((question, i) => selectedOptions[i] == question.answer)
  return (
    <>
      <div>
        Your score is {correctScore.length}
      </div>
    </>
  )
}

export default Submit