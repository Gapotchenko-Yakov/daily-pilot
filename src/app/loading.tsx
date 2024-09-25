import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Loading() {
  return (
    <Alert className="alert alert-loading">
      <AlertTitle>Loading...</AlertTitle>
      <AlertDescription>On the app level. </AlertDescription>
    </Alert>
  );
}
