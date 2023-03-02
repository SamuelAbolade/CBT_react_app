import React from 'react'
import { useSelector } from 'react-redux'
import questions from "../questions"
const Submit = () => {
  const { optionReducer: { selectedOptions } } = useSelector((state) => (state))
  const correctScore = questions.filter((question, i) => selectedOptions[i] == question.answer)
  console.log(correctScore)
  return (
    <>
      <div>
        Your score is {correctScore.length}
      </div>
    </>
  )
}

export default Submit