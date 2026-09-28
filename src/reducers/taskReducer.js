import { updateLocalStorage } from "../utils/localStorageUtils";

export const taskReducer = (state, action) => {
  //we gonna save the new state here
  let updatedTasks;
  //Depending on the type of the action we gonna do something to the state
  switch (action.type) {

    case 'ADD':
        //Create a new array with task plus the new task
        updatedTasks = [...state, action.payload];
        break;
    case 'DELETE':
        //We remove task by id and update the task list
        updatedTasks = state.filter((task) => task.id !== action.payload); 
        break;   

    //Maps throw all task and update the corresponding one    
    case 'UPDATE':
         updatedTasks = state.map((task) =>
           task.id === action.payload.id
             ? { ...task, text: action.payload.editText, priority: action.payload.editPriority }
             : task,
         );  
        break;   
    //Maps throw all task and flip the done value of the selected task   
    case 'TOGGLE_DONE':
          updatedTasks = state.map((task) =>
            task.id === action.payload ? { ...task, done: !task.done } : task,
          );
        break;
    //Sorts task list by priority    
    case 'SORT' : 
        updatedTasks = [...state].sort((a, b) => a.priority - b.priority);
        break;    

    //if there is no matching case we gonna return current state
    default:
      state;
  }

  //save the task list to localStorage
  updateLocalStorage(updatedTasks);
  // update the state

  return updatedTasks;
};
