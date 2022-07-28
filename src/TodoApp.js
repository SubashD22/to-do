import { Paper, Typography, AppBar, Toolbar,Grid} from "@mui/material";
import React from "react";
import { TodoProvider} from "./context/todoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp(){
    //const initialList = [];
    //const{todos,addTodo,removeTodo,toggleTodo,updateTodo} = useTodoState(initialList);
    return(
    <Paper style=
     {{
        padding: 0,
        margin:0,
        height:"100vh",
        backgroundColor:"#fafafa"
     }} elevation={0}>
      <AppBar color="primary" position="static" style={{height:"64px"}}>
        <Toolbar>
            <Typography>TodoApp</Typography>
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
        
       
    </Paper>
  )
}

export default TodoApp;