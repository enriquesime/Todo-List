import { Check } from "lucide-react";
import { useState } from "react";
import { useTaskActions } from "../context/TaskContext";


const EditTaskForm =({task,setEditingTaskId}) =>{
    
    const [editText, setEditText ]=useState(task.text);
    const [editPriority, setEditPriority] = useState(task.priority);
    const {editTask} = useTaskActions();

    const inputStyle = {
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    };

    const handleEditTask = () =>{
       
        if(editText.trim()!==''){
          editTask(task.id, editText, editPriority);
           setEditingTaskId(null);
        }
      
    }

    return (
      <>
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ ...inputStyle, flexGrow: 1 }}
          type="text"
        />
        <input
          value={editPriority}
          onChange={(e) => setEditPriority(Number(e.target.value))}
          style={{ ...inputStyle, width: "50px", marginLeft: "15px" }}
          type="number"
          min={1}
        />
        <button
          onClick={handleEditTask}
          style={{
            border: "none",
            color: "white",
            backgroundColor: "lightgreen",
            marginLeft: "15px",
            borderRadius: "50%",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <Check size={16} />
        </button>
      </>
    );
}
export default EditTaskForm;