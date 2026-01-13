import "./App.css";
import TaskColumn from "./Components/TaskColumn/TaskColumn";
import TaskForm from "./Components/TaskForm/TaskForm";
import closedIcon from "../src/assets/right-check-finale.png";
import { useEffect, useState } from "react";

const existingTasks = localStorage.getItem("task");

function App() {
  const [task, setTasks] = useState(JSON.parse(existingTasks) || []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const [activeCard, setActiveCard] = useState(null);

  const onDrop = (status, position) => {
  
    if (activeCard === null || activeCard === undefined) return;

    const tasktoMove = task[activeCard];
    const updatedTasks = task.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...tasktoMove,
      status: status,
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (taskIndex) => {
    const newTask = task.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <header>
        <TaskForm setTasks={setTasks} />
      </header>
      <main className="app_main">
        <TaskColumn
          title="Ready For Development"
          task={task}
          status="Ready For Development"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          task={task}
          status="In Progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Ready For Test"
          task={task}
          status="Ready For Test"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Closed"
          icon={closedIcon}
          task={task}
          status="Closed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
      <h2>Active : {activeCard}</h2>
    </>
  );
}

export default App;
