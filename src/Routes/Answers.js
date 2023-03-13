import React from 'react'
import { useSelector } from 'react-redux'

const Answers = () => {
    const { optionReducer: { selectedOptions }, questionControllerReducer: { questions } } = useSelector((state) => (state));
    console.log(selectedOptions)
    console.log(questions[3]["A"])

    return (
        <>
            <div>
                {questions.map(({ question, answer }, i) =>
                    <div className='mt-3' key={i}>
                        <div><strong>{i + 1}.</strong> {question}</div>
                        {['A', 'B', 'C', 'D'].map((label, index) => (
                            <div key={index} className={label === answer ? "alert alert-success p-0 mb-0": null}>
                                {label}. {questions[i][label]}
                            </div>
                            // console.log(questions["answer"])
                        ))} 
                    </div>
                )}
            </div>
        </>
    )
}


export default Answers