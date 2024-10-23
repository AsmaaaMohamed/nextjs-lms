import TCategory from "@/components/types/category";
import "./PopularCategory.css";
import Image from "next/image";

type TPopularCategoryProps = TCategory;
const PopularCategory = ({ title, icon, img }: TPopularCategoryProps) => {
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
            <a href="/courses">
              <h6>{title}</h6>
            </a>
            <span>24 Course</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
