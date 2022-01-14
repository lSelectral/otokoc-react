import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationLayout() {
  return (
    <Stack sx={{alignItems:'center'}}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
}