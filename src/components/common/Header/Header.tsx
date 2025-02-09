import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";
import { getCachedCoursesCategories } from "@/server/db/cached";

const Header = async() => {
  const session = await auth();
  const coursesCategories = await getCachedCoursesCategories();
  return <ClientComponent session={session} coursesCategories={coursesCategories}/>;
  
};

export default Header;