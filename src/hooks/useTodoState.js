//import React from "react";
//import { v4 as uuidv4 } from 'uuid';
//import localstorageReducer from "./localstorageReducer";
//
//export default initialval => {
//    const [todos,setTodo] = localstorageReducer("todos",initialval);
//    return({
//        todos,
//        addTodo : newTodo =>{
//            setTodo([...todos,{id:uuidv4(),task:newTodo,completed:false}])
//        },
//        removeTodo: id => {
//            const updatedTodo = todos.filter(todo => todo.id !== id);
//            setTodo(updatedTodo)
//          },
//        toggleTodo: id =>{
//            const updateTodo = todos.map(
//              todo => todo.id === id ? {...todo,completed:!todo.completed}: todo);
//             setTodo(updateTodo) 
//          },
//        updateTodo: (id,value) =>{
//            const updateTodo = todos.map(
//              todo => todo.id === id ? {...todo,task:value}: todo);
//             setTodo(updateTodo) 
//          }
//    })
//    
//}