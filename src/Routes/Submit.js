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
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function CustomizedTables() {
    const navigate = useNavigate()
    const { optionReducer:{selectedOptions}, questionControllerReducer:{questions}} = useSelector((state)=>state)
    const correctOptions = selectedOptions.filter((option, i) => questions[i].answer === option)
    const attempted = selectedOptions.filter((option, i)=> option)

    console.log(attempted);
  return (
    // <div className="col-12 col-lg-8 col-md-12 m-auto mt-5">
    //   <TableContainer component={Paper}>
    //     <Table className=''>
    //       <TableHead>
    //         <TableRow className='border'>
    //           <TableCell align="center">TOTAL QUESTIONS</TableCell>
    //           <TableCell align="center">ATTEMPTED</TableCell>
    //           <TableCell align="center">SCORED</TableCell>
    //         </TableRow>
    //       </TableHead>

    //       <TableBody>
    //         <TableRow>
    //           <TableCell align="center">44</TableCell>
    //           <TableCell align="center">44</TableCell>
    //           <TableCell align="center">44</TableCell>
    //         </TableRow>
    //       </TableBody>

    //     </Table>
    //   </TableContainer>

    // </div>
    <main className='m-auto mt-5'>
      <section className="result">
        <h1>Your Result</h1>

        <div className="score">
          <div className="your-score">{correctOptions.length}</div>
          <div className="total-score">of 100</div>
        </div>
        
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </section>

      <section className="summary">
        <h2>Summary</h2>

        <div className="reaction">
          <div className="reaction-beauty">
            <div className="reaction-left">
              {/* <img className="reaction-icon" src="assets/images/icon-reaction.svg" alt="reaction icon" /> */}
              <div>Attempted</div>
            </div>

            <span><strong>{attempted.length}</strong> / {questions.length}</span>
          </div>
        </div>

        <div className="memory">
          <div className="memory-beauty">
            <div className="memory-left">
              {/* <img className="memory-icon" src="assets/images/icon-memory.svg" alt="memory icon" /> */}
              <div>Scored </div>
            </div>

            <span><strong>{correctOptions.length}</strong> / {questions.length}</span>
          </div>
        </div>

        <div className="verbal">
          <div className="verbal-beauty">
            <div className="verbal-left">
              {/* <img className="verbal-icon" src="assets/images/icon-verbal.svg" alt="verbal icon" /> */}
              <div>Total Questions</div>
            </div>

            <span><strong>{questions.length}</strong></span>
          </div>
        </div>

        <CssVarsProvider>
        <a href="/">
          <Button type="submit" className='mt-3 w-100' variant="solid" color="primary">
            LEAVE
          </Button>
        </a>
        </CssVarsProvider>

        <div className="attribution">
          {/* <p>Challenge by <a href="https://www.frontendmentor.io/profile/lawal2000" target="_blank">Frontend Mentor</a>.</p> */}
          <p>Coded by <a href="https://github.com/techie-sam" target="_blank">Techie Sam</a></p>
        </div>
      </section>
    </main>
  );
}