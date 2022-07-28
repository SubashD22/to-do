import React, { useContext } from "react";
import {ListItem,ListItemText,Checkbox,IconButton,ListItemSecondaryAction,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from "./hooks/toggleState";
import EditingForm from "./editingForm";
import { TodoContext } from "./context/todoContext";

function Todo({id,status,task}){
  const[editing,toggle]= useToggle(false);
  const{removeTodo,toggleTodo,updateTodo} = useContext(TodoContext)
    return(
        <ListItem key={id}>{
           editing ? (<EditingForm toggle={toggle} updateTodo={updateTodo} id={id} task={task}/>) :(
            <>
            <Checkbox checked={status} onClick={()=>toggleTodo(id)}/>
            <ListItemText style={{textDecoration: status ? "line-through" :"none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
               <EditIcon/>
             </IconButton>
             <IconButton aria-label="delete" onClick={()=>removeTodo(id)}>
               <DeleteIcon  />
             </IconButton>
            </ListItemSecondaryAction>
            </>
           )}
         
        </ListItem>
    )
}
export default Todo