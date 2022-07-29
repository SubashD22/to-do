import React, { useContext } from "react";
import {Paper,TextField,Button} from "@mui/material";
import useInputState from './hooks/inputState';
import { DispatchContext } from "./context/todoContext";
import { DarkmodeContext } from "./context/darkmodeContext"; 



function TodoForm(){
    const {mode} = useContext(DarkmodeContext)
    const {dispatch} = useContext(DispatchContext);
    const[value,handleChange,reset]= useInputState("");
    return(
        <Paper 
        style={{
            marginBottom:"1rem",
            backgroundColor:mode ? "#c5c5c5": "#fafafa"
            }}>
            <form onSubmit={e=>{
                e.preventDefault();
                if(value===""){alert("Task cant be empty")}
                else{dispatch({type:"AddTodo", task:value})};
                reset()}}>
                <TextField variant="standard" label="Add Task" style={{width:"80%", margin:"0 1rem",}}
                 value={value}
                 onChange={handleChange}
                />
                <Button style={{width:'10%', margin:"0.5rem 0"}} type="submit" variant="contained">Add</Button>
            </form>
        </Paper>
    )
};

export default TodoForm;