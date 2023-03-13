import React from 'react'
import { useSelector } from 'react-redux'

const Answers = () => {
    const { optionReducer:{ selectedOptions }, questionControllerReducer: { questions } } = useSelector((state) => (state));
    return (
        <>
            <div>
                {questions.map(({ question, A, B, C, D,  }, i) =>
                    <div className='mt-3' key={i}>
                        <div><strong>{i + 1}.</strong> {question}</div>
                        {[A, B, C, D].map(( option, index) => (
                            <div key={index} >{option}</div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}


export default Answers