import "./PopularCategory.css";
import Image from "next/image";
import Link from "next/link";
import { CourseCategory } from "@prisma/client";

const PopularCategory = ({ title, icon, img }: CourseCategory) => {
  return (
    <div className="col">
      <div className="category-item text-center">
        <div
          className="category-inner"
          style={{ background: `url(${img})`, backgroundSize: "cover" }}
        >
          <div className="category-thumb">
            <Image src={icon} alt="category rajibraj91 rajibraj" width={80} height={80}/>
          </div>
          <div className="category-content">
            <Link href="/courses">
              <h6>{title}</h6>
            </Link>
            <span>24 Course</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
