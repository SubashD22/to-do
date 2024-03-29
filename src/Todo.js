import React, { useContext,memo } from "react";
import {ListItem,ListItemText,Checkbox,IconButton,ListItemSecondaryAction,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from "./hooks/toggleState";
import EditingForm from "./editingForm";
import { DispatchContext } from "./context/todoContext";
import { DarkmodeContext } from "./context/darkmodeContext";

function Todo({id,status,task}){
  const {mode}= useContext(DarkmodeContext)
  const[editing,toggle]= useToggle(false);
  const{dispatch} = useContext(DispatchContext)
    return(
        <ListItem key={id} style={{
          backgroundColor:mode ? "#c5c5c5": "#fafafa"
        }}>{
           editing ? (<EditingForm toggle={toggle} id={id} task={task}/>) :(
            <>
            <Checkbox checked={status} onClick={()=>dispatch({type:"ToggleTodo",id:id})}/>
            <ListItemText style={{color: status ? "#808080" :"black"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
               <EditIcon/>
             </IconButton>
             <IconButton aria-label="delete" onClick={()=>dispatch({type:"RemoveTodo",id:id})}>
               <DeleteIcon  />
             </IconButton>
            </ListItemSecondaryAction>
            </>
           )}
         
        </ListItem>
    )
}
export default memo(Todo)