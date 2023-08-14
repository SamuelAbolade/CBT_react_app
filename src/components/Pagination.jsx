import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

 const  Pagination =({setActiveCurrentQuestionIndex})=> {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setActiveCurrentQuestionIndex(5);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={13} page={5} onChange={handleChange} />
    </Stack>
  );
}
export default Pagination