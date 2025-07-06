import { Alert, AlertTitle } from "@mui/material";

export default function Loading() {
  return (
    <Alert severity="info" variant="outlined">
      <AlertTitle>Loading...</AlertTitle>
      On the app level.
    </Alert>
  );
}
