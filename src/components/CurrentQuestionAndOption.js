import React from 'react'
import CurrentQuestion from './CurrentQuestion'
import CurrentQuestionOption from './CurrentQuestionOption'

const CurrentQuestionAndAnswer = () => {
  return (
    <div id='unselectable'>
        <CurrentQuestion />
        <CurrentQuestionOption />
    </div>
  )
}

export default CurrentQuestionAndAnswer