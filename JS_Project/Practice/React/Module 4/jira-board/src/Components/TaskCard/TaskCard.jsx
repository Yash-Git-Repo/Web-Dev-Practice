import "./TaskCard.css";
import Tag from "../Tags/Tag";
import deleteIcon from "../../assets/deleteIcon.png";
const TaskCard = () => {
  return (
    <article className="taskcard">
      <p className="task_text">Sample Text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="deleteIcon" className="deleteIcon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
