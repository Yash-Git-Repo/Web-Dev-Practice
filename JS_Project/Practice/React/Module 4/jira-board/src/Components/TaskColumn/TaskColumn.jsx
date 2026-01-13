import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";
const TaskColumn = (props) => {
  const { title, icon } = props;
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="" className="task_column_icon"></img>
          {title}
        </h2>
        <TaskCard />
      </section>
    </div>
  );
};

export default TaskColumn;
