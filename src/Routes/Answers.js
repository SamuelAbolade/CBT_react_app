import React from 'react'
import { useSelector } from 'react-redux'

const Answers = () => {
    const { optionReducer: { selectedOptions }, questionControllerReducer: { questions } } = useSelector((state) => (state));
    // console.log(selectedOptions)
    // console.log(questions[3]["A"])

    return (
        <>
            <div>
                {questions.map(({ question, answer }, i) =>
                    <div className='mt-3 bg-light p-3 col-lg-8 m-auto border border-2 rounded' key={i}>
                        <div><strong>{i + 1}.</strong> {question}</div>
                        {['A', 'B', 'C', 'D'].map((label, index) => (
                            <div key={index} className='mt-1'>
                                <div className={label === answer ? "alert alert-success p-0 py-1 mb-0 rounded-1" : label == selectedOptions[i] ? "alert alert-danger p-0 py-1 mb-0 rounded-1" : undefined}>
                                    {label}. {questions[i][label]}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}


export default Answers