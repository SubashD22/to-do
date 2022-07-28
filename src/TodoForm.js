import React, { useContext } from "react";
import {Paper,TextField,Button} from "@mui/material";
import useInputState from './hooks/inputState';
import { DispatchContext } from "./context/todoContext"; 



function TodoForm(){
    const {dispatch} = useContext(DispatchContext);
    const[value,handleChange,reset]= useInputState("");
    return(
        <Paper style={{marginBottom:"1rem"}}>
            <form onSubmit={e=>{
                e.preventDefault();
                dispatch({type:"AddTodo", task:value});
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