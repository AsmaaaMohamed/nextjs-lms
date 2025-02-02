import InstructorCard from "@/components/lms/Instructor/InstructorCard";
import { getCachedInstructors } from "@/server/db/cached";


const InstructorsSection = async() => {
    const instructors = await getCachedInstructors();
    const renderedInstructors = instructors.map((i) => {
    return (
        <div key={i.id} className="col">
        <InstructorCard {...i} />
        </div>
    );
    });
  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">World-class Instructors</span>
          <h2 className="title">Classes Taught By Real Creators</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {renderedInstructors}
          </div>
          <div className="text-center footer-btn">
            <p>
              Want to help people learn, grow and achieve more in life?
              <a href="/team">Become an instructor</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorsSection