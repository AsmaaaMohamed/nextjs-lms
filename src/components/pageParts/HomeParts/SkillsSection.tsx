import { getSkills } from "@/apiCalls/skillsApiCall";
import SkillCard from "@/components/lms/Skill/SkillCard";
import Link from "next/link";


const SkillsSection = async() => {
    const skills = await getSkills();
    const renderedSkills = skills.map((s) => {
    return (
        <div key={s.id} className="col">
        <SkillCard {...s} />
        </div>
    );
    });
  return (
    <div className="skill-section padding-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12">
            <div className="section-header">
              <h2 className="title">
                Build Your Project Management Skills Online Anytime
              </h2>
              <Link className="lab-btn" href="/signup">
                <span>Sign Up Now</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="section-wrpper">
              <div className="row g-4 justify-content-center row-cols-sm-2 row-cols-1">
                {renderedSkills}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection