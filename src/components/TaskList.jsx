import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import { useTaskActions } from "../context/TaskContext";

const TaskList = ({
  tasks,
  showOnlyIncomplete
}) => {

    const [editingTaskId, setEditingTaskId] =useState(null)
    const {deleteTask}= useTaskActions();
    
  return (
    <div>
      <ul>
        {tasks
          .filter((task) => !showOnlyIncomplete || !task.done)
          .map((task) => (
            <li
              key={task.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                gap: "10px",
                backgroundColor: "light-gray",
              }}
            >
              {editingTaskId === task.id ? (
                <EditTaskForm task={task} setEditingTaskId={setEditingTaskId}/>
              ) : (
                <TaskItem
                  task={task}
                
                  deleteTask={deleteTask}
                  setEditingTaskId={setEditingTaskId}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TaskList;
