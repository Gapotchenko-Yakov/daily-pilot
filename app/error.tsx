"use client";
import { Alert, AlertTitle } from '@mui/material';

const Error = ({ error }: { error: Error }) => {
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>Error!</AlertTitle>
      {error.message}
    </Alert>
  );
};

export default Error;
