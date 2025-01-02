import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";

const Header = async() => {
  const session = await auth();
  console.log(session);
  return <ClientComponent session={session} />;
  
};

export default Header;