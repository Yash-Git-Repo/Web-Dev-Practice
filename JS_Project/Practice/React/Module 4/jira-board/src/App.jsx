import "./App.css";
import TaskColumn from "./Components/TaskColumn/TaskColumn";
import TaskForm from "./Components/TaskForm/TaskForm";
import closedIcon from "../src/assets/right-check-finale.png";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <header>
        <TaskForm />
      </header>
      <main className="app_main">
        <TaskColumn title="Ready For Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready For Test" />
        <TaskColumn title="Closed" icon={closedIcon} />
      </main>
    </>
  );
}

export default App;
