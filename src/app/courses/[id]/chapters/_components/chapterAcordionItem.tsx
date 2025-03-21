import Accordion from "react-bootstrap/Accordion";
import SectionItem from "./sectionItem";
import { Chapter, ChapterSection, UserProgress } from "@prisma/client";

type ChapterWithChapterSection = Chapter & {
  chapterSections:  (ChapterSection & { userProgress: UserProgress[] })[]
  };
interface ChapterAcordionItemProps {
  chapter: ChapterWithChapterSection;
  courseId: number;
  urlChapterSection:number | null;
}
const ChapterAcordionItem = ({
  chapter,
  courseId,
  urlChapterSection,
}:ChapterAcordionItemProps) => {
  const mappedChapterSections = chapter.chapterSections.map((section) => {
     const isActive = urlChapterSection === section.id;
    return (
      <SectionItem
        key={section.id}
        sectionId={section.id}
        courseId={courseId}
        sectionTitle={section.title}
        isCompleted={!!section?.userProgress?.[0]?.isCompleted}
        chapterPosition={chapter.position}
        sectionPosition={section.position}
        chapterId={chapter.id}
        isActive={isActive}
      />
    );
  });
  return (
    <Accordion.Item
      eventKey={`${chapter.position - 1}`}
      className="mb-1"
      key={chapter.id}
    >
      <Accordion.Header>
        <div>
          Chapter {chapter.position}: {chapter.title}
          <span className="d-block font-weight-normal">
            Videos: {chapter.chapterSections.length} |{" "}
            {chapter.chapterSections.length * 6}:00 Min
          </span>
        </div>
      </Accordion.Header>
      <Accordion.Body>{mappedChapterSections}</Accordion.Body>
    </Accordion.Item>
  );
};

export default ChapterAcordionItem;
