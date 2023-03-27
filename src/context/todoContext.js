import React, { createContext,} from "react";
import localstorageReducer from "../hooks/localstorageReducer";
import TodoReducer from "../reducers/TodoReducers";
const initialval = []
export const TodoContext = createContext();
export const DispatchContext = createContext();


export function TodoProvider(props){
    const [todos,dispatch] = localstorageReducer("todos",initialval,TodoReducer,);
    return(
       <TodoContext.Provider value={{todos}}>
        <DispatchContext.Provider value={{dispatch}}>
        {props.children}
        </DispatchContext.Provider>
        
       </TodoContext.Provider>
    )
}

