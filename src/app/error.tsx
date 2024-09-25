"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Error = ({ error }: { error: Error }) => {
  return (
    <Alert className="alert alert-error">
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};

export default Error;
