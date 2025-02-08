import { Suspense } from "react";
import ClientComponent from "./client-component";

const LoginPage =  () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
    </Suspense>
  );
};

export default LoginPage;