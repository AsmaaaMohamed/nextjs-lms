import ClientComponent from "./client-component"


const LoginPage = async (props: {searchParams: { callbackUrl: string | undefined }}) => {
  return <ClientComponent props={props}/>;
};

export default LoginPage