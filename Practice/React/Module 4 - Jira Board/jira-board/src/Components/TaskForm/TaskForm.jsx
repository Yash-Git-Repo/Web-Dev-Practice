import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tags/Tag";

function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready For Development",
    tags: [],
  });

  const checkTag = (tagName) => {
    return taskData?.tags?.some((item) => item === tagName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "Ready For Development",
      tags: [],
    });
  };

  const selectedTags = (tagName) => {
    if (taskData?.tags?.some((item) => item === tagName)) {
      //Remove the entry if it is already present
      const filterTags = taskData?.tags?.filter((item) => item != tagName);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      //Add the entry if it is not present
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  return (
    <div className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Details"
          className="task_input"
          name="task"
          value={taskData?.task}
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="DEV"
              selectedTags={selectedTags}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTags={selectedTags}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTags={selectedTags}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData?.status}
              onChange={handleChange}
            >
              <option value="Ready For Development">
                Ready For Development
              </option>
              <option value="In Progress"> In Progress</option>
              <option value="Ready For Test">Ready For Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="task_submit">
              +Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
