import { Typography, AppBar, Toolbar,Grid} from "@mui/material";
import React from "react";
import { DarkModeProvider} from "./context/darkmodeContext";
import { TodoProvider} from "./context/todoContext";
import DarkmoderPaper from "./ModePaper";
import DarkmodeSwitch from "./switch";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp(){
  
    return(
    <DarkModeProvider>
        <DarkmoderPaper>
      <AppBar color="primary" position="static" style={{height:"64px"}}>
        <Toolbar>
            <Typography>TodoApp</Typography>
            <DarkmodeSwitch />
        </Toolbar>
        </AppBar>
        <Grid container justifyContent={"center"} style={{marginTop:"1rem"}}>
        <Grid item xs={10} md={8} lg={6}>
          <TodoProvider>
          <TodoForm/>
          <TodoList/>
          </TodoProvider>
         
        </Grid>
        
      </Grid>
        
       
    </DarkmoderPaper>
    </DarkModeProvider>
    
  )
}

export default TodoApp;