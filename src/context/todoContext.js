import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
const initialval = [{task:"hello There", id:1, conpleted:false}]
export const TodoContext = createContext();

export function TodoProvider(props){
    const TodoStuff = useTodoState(initialval);
    return(
       <TodoContext.Provider value={{...TodoStuff}}>
        {props.children}
       </TodoContext.Provider>
    )
}

