import { getCoursesCategories } from "@/apiCalls/coursesCategoriesApiCalls";
import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";

const Header = async() => {
  const session = await auth();
  const coursesCategories = await getCoursesCategories();
  console.log(session);
  return <ClientComponent session={session} coursesCategories={coursesCategories}/>;
  
};

export default Header;