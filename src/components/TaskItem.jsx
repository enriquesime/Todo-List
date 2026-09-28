import { Trash, Pencil } from "lucide-react";
import { useTaskActions } from "../context/TaskContext";
const TaskItem = ({ task, setEditingTaskId }) => {

  const {toggleTaskDone, deleteTask} = useTaskActions();
  
  const handleEditTask =()=>{
    if(!task.done){
      setEditingTaskId(task.id)
    }
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskDone(task.id)}
          style={{ marginRight: "10px" }}
        />
        <span
          style={{
            textDecoration: task.done ? "line-through" : "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flex: 1,
          }}
        >
          {task.text}
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: "blue",
              padding: "4px 8px",
              fontSize: "12px",
              fontWeight: "bold",
              textAlign: "center",
              display: "inline-block",
              color: "white",
              cursor: "pointer",
            }}
          >
            {task.priority}
          </span>
        </span>
        <button
          onClick={handleEditTask}
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            border: "none",
            padding: "10px",
            marginRight: "8px",
            cursor: "pointer",
          }}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            borderRadius: "50%",
            backgroundColor: "#dc3545",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            color: "white",
          }}
        >
          <Trash size={16} />
        </button>
      </div>
    </>
  );
};
export default TaskItem;
