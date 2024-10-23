import Image from "next/image";
import "./SkillCard.css";

const SkillCard = ({ title, desc, icon }) => {
  return (
    <div className="skill-item">
      <div className="skill-inner">
        <div className="skill-thumb">
          <Image src={icon} alt="skill rajibraj91 rajibraj" width={70} height={70} />
        </div>
        <div className="skill-content">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
