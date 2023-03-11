import React from 'react'
import { useSelector } from 'react-redux'

const Answers = () => {
    const { optionReducer: { selectedOptions }, questionControllerReducer: { questions, currentQuestionIndex } } = useSelector((state) => (state));

    const OPTIONS = ['A', 'B', 'C', 'D'];
    const OPTION_DATA = OPTIONS.map(option => ({
        option,
    }));
    return (
        <>
            <div>
                {questions.map((item, i) =>

                    <>
                    <div>

                        {item.question}
                    </div>
                    </>

                )}
            </div>
        </>
    )
}

export default Answers