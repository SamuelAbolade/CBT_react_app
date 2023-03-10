import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import questions from '../questions'
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import '../App.css';
import { useSelector } from 'react-redux';


export default function CustomizedTables() {
  const { optionReducer: { selectedOptions }, questionControllerReducer: { questions } } = useSelector((state) => state)
  const correctOptions = selectedOptions.filter((option, i) => questions[i].answer === option)
  const attempted = selectedOptions.filter((option, i) => option)

  return (
    <main className='m-auto mt-5'>
      <section className="result">
        <h1>Your Result</h1>

        <div className="score">
          <div className="your-score">{correctOptions.length}</div>
          <div className="total-score">of {questions.length}</div>
        </div>
        {correctOptions.length > 35 ? <p>Well done, You scored higher than 75%.</p> :<p>You score. Don't give up!!</p>}
      </section>

      <section className="summary">
        <h2>Summary</h2>

        <div className="reaction">
          <div className="reaction-beauty">
            <div className="reaction-left">
              <div>Attempted</div>
            </div>

            <span><strong>{attempted.length}</strong> / {questions.length}</span>
          </div>
        </div>

        <div className="memory">
          <div className="memory-beauty">
            <div className="memory-left">
              <div>Scored </div>
            </div>

            <span><strong>{correctOptions.length}</strong> / {questions.length}</span>
          </div>
        </div>

        <div className="verbal">
          <div className="verbal-beauty">
            <div className="verbal-left">
              <div>Total Questions</div>
            </div>

            <span><strong>{questions.length}</strong></span>
          </div>
        </div>

        <CssVarsProvider>
          <a href="answers">
            <Button type="submit" className='mt-3 w-100' variant="solid" color="primary">
              VIEW ALL ANSWERS
            </Button>
          </a>
          <a href="/">
            <Button type="submit" className='mt-3 w-100' variant="solid" color="primary">
              LEAVE
            </Button>
          </a>
        </CssVarsProvider>

        <div className="attribution">
          <p>Coded by <a href="https://github.com/techie-sam" target="_blank">Techie Sam</a></p>
        </div>
      </section>
    </main>
  );
}