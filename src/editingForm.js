import { TextField,Button,ListItemSecondaryAction } from "@mui/material";
import React from "react";
import useInputState from './hooks/inputState';


function EditingForm ({toggle,updateTodo,id,task}){
    const [value,handleChange,reset] = useInputState(task)
    return(
        <form style={{width:"100%"}} onSubmit={e=>{
            e.preventDefault();
            updateTodo(id,value);
            reset();
            toggle();}}>
            <TextField variant="standard" label="Update Task" style={{width:"70%", margin:"0 1rem",}}
             value={value}
             onChange={handleChange}
            />
                <Button style={{width:'10%', margin:"0.5rem 0.5rem"}} type="submit" variant="contained">UPDATE</Button>
                <Button style={{width:'10%', margin:"0.5rem 0.5rem"}} onClick={toggle} variant="contained">CANCEL</Button>
            
        </form>

       
        
    )
}

export default EditingForm;