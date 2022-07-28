
import { v4 as uuidv4 } from 'uuid';

function TodoReducer(state,action){
 switch (action.type) {
    case "AddTodo":
        return [...state,{id:uuidv4(),task:action.task,completed:false}]
    case "RemoveTodo":
        return state.filter(todo => todo.id !== action.id)
    case "ToggleTodo":
        return state.map(
            todo => todo.id === action.id ? {...todo,completed:!todo.completed}: todo)
    case "UpdateTodo":
        return state.map(
            todo => todo.id === action.id ? {...todo,task:action.task}: todo);
    default:
        return state;
 }
}

export default TodoReducer;