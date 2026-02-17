import DropArea from "../DropArea/DropArea";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";
const TaskColumn = (props) => {
  const { title, icon, task, status, handleDelete, setActiveCard, onDrop } =
    props;
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="" className="task_column_icon"></img>
          {title}
        </h2>
        <DropArea />
        {task.map(
          (task, index) =>
            task.status === status && (
              <>
                <TaskCard
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </>
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
