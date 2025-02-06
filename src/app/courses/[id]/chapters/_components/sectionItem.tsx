"use client"
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";

interface SectionItemProps {
  sectionId: number;
  sectionTitle: string;
  isCompleted: boolean;
  courseId: number;
  isLocked: boolean;
  chapterPosition:number;
  sectionPosition:number;
  chapterId:number;
  isActive:boolean;
}
const SectionItem = ({
  sectionId,
  sectionTitle,
  isCompleted,
  courseId,
  isLocked,
  chapterPosition,
  sectionPosition,
  chapterId,
  isActive
}: SectionItemProps) => {
  const router = useRouter();
 
  console.log(
    "sseeeeeeeeerrrrrrrrrrrPPPPaaaaaaaaa",
    isActive
  );
    const icon = isLocked
      ? (<i className="icofont-ui-lock icofont"></i>)
      : isCompleted
      ? (<i className="icofont-checked complite icofont"></i>)
    //   : isActive
    //   ? (<i className="icofont-pause icofont"></i>)
      : (<i className="icofont-square icofont"></i>);
  const handleSectionClick = async() => {
    if(!isLocked){
      await fetch(`${DOMAIN}/api/chapterSections/${sectionId}`, {
                method: "POST",
              });
      router.push(`/courses/${courseId}/chapters/${chapterId}/chapterSections/${sectionId}`);
      router.refresh();
    }
  };
  return (
    <div
      className={`course-lists d-flex flex-wrap justify-content-between ${isActive && 'activeSection'}`}
      onClick={handleSectionClick}
    >
      <div className="csa-left">
        {icon}
        <h6>{`${chapterPosition}.${sectionPosition} ${sectionTitle}`}</h6>
        <p>
          <i className="icofont-play-alt-2 icofont"></i>
          6:00 Min
        </p>
      </div>
    </div>
  );
};

export default SectionItem;