import HomePostsSection from "@/components/pageParts/HomeParts/HomePostsSection";
import HomePickCourse from "@/components/pageParts/HomeParts/HomePickCourse";
import ClientComponent from "./client-component";
import PopularCategoriesSection from "@/components/pageParts/HomeParts/PopularCategoriesSection";
import SkillsSection from "@/components/pageParts/HomeParts/SkillsSection";
import InstructorsSection from "@/components/pageParts/HomeParts/InstructorsSection";

export default function Home() {
  return (
    <ClientComponent
      homePickCourse={<HomePickCourse />}
      homePostsSection={<HomePostsSection />}
      popularCategoriesSection={<PopularCategoriesSection/>}
      skillsSection={<SkillsSection/>}
      instructorsSection={<InstructorsSection/>}
    />
  );
}
