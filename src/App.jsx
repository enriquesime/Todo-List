import { useReducer, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";
import { getStoredTasks } from "./utils/localStorageUtils";
import { taskReducer } from "./reducers/taskReducer";
import { TaskContext } from "./context/TaskContext";
const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());
  //     { id: 1, text: "Buy groceries", priority: 4, done: true },
  //     { id: 2, text: "Have a walk", priority: 2, done: false },
  //     { id: 3, text: "Read a book", priority: 3, done: false },
  //   ]);

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const sortTasks = () => {
    dispatch({ type: "SORT" });
  };

  const addTask = (newTask) => {
    dispatch({ type: "ADD", payload: newTask });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const toggleTaskDone = (id) => {
    dispatch({ type: "TOGGLE_DONE", payload: id });
  };

  const editTask = (id, editText, editPriority) => {
    dispatch({ type: "UPDATE", payload: { id, editText, editPriority } });
  };

  return (
    <TaskContext.Provider value={{ deleteTask, toggleTaskDone, editTask }}>
      <div
        style={{
          padding: "20px",
          margin: "auto",
          maxWidth: "800px",
          fontFamily: "Arial",
        }}
      >
        <h2 style={{ textAlign: "center" }}>To-Do List</h2>
        <TaskForm addTask={addTask} />
        <TaskControls
          showOnlyIncomplete={showOnlyIncomplete}
          setShowOnlyIncomplete={setShowOnlyIncomplete}
          sortTasks={sortTasks}
        />
        <TaskList
          tasks={tasks}
          showOnlyIncomplete={showOnlyIncomplete}
          deleteTask={deleteTask}
        />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
