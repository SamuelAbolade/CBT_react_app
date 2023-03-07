import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import questions from '../questions'


export default function CustomizedTables() {
  return (
    <div class="col-12 col-lg-8 col-md-12 m-auto mt-5">
      <TableContainer component={Paper}>
        <Table className=''>
          <TableHead>
            <TableRow className='border'>
              <TableCell align="center">TOTAL QUESTIONS</TableCell>
              <TableCell align="center">ATTEMPTED</TableCell>
              <TableCell align="center">SCORED</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center">44</TableCell>
              <TableCell align="center">44</TableCell>
              <TableCell align="center">44</TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}