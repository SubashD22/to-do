import React,{useContext} from "react";
import { TodoContext } from "./context/todoContext";
import Todo from "./Todo";
import {Paper,List,Divider} from "@mui/material";
function TodoList(){
    const {todos} = useContext(TodoContext)
    return(
        todos.length ? (
        <Paper>
            <List>
            {
             todos.map((todo,i) =>(
                <div key={i}>
                 <Todo task={todo.task} status={todo.completed} id={todo.id}/>
                 {i < todos.length-1 ? (<Divider/>):""}
                </div>
               
            ))
            }
            </List>
        </Paper>): null
    )
};

export default TodoList;