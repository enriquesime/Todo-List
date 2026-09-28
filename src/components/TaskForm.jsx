import { Plus } from "lucide-react";
import { useState } from "react";

const TaskForm =({addTask})=>{

    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority]= useState(1);
   
   
    
   
    const inputStyle ={
        padding:'8px',
        borderRadius:'5px',
        border:'1px solid #ccc'
    }

    const handleSubmit = () =>{
        //Checks if new task is not just empty string
        if(newTask.trim()){
            const taskToAdd = {
              id: Date.now(), text: newTask, priority: newPriority
            }
           addTask(taskToAdd);
        }

       //Clear input values
       setNewTask("");
       setNewPriority(1);
    }
    return (
      <div >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            style={{ ...inputStyle, flexGrow: 1 }}
            type="text"
            name="task"
            value={newTask}
            onChange={(e)=> setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <input
            type="number"
            min="1"
            name="priority"
            value={newPriority}
            onChange={(e)=>setNewPriority(Number(e.target.value))}
            style={{ ...inputStyle }}
          />
        </div>
        <button
           onClick={handleSubmit}
          style={{
            display:'block',
            
            margin:'20px auto 0',
            border: "none",
            color: "white",
            backgroundColor: "#007bff",
            borderRadius: "50%",
            padding: "15px",
            cursor: "pointer",
          }}
        >
          <Plus size={20} />
        </button>
      </div>
    );
}
export default TaskForm;