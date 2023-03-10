import React from 'react'
import { useSelector } from 'react-redux'

const Answers = () => {
    const {questionControllerReducer:{questions}} = useSelector(state=>state)
  return (
    <>
        <div>
            {questions.map((item, i)=>
            <>
            <p>{ item.question }</p>
            <p>{ item.A }</p>
            <p>{ item.B }</p>
            <p>{ item.C }</p>
            <p>{ item.D }</p>
            <p>{ item.answer }</p>
            </>

            )}
        </div>
    </>
  )
}

export default Answers