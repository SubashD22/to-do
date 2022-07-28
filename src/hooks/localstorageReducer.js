import React,{useEffect, useReducer} from "react";

export default (key,defaultval,reducer) =>{
    const [state,dispatch]=useReducer(reducer,defaultval,()=>{

        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key)) || String(defaultval)
        }catch(e){
            val = defaultval
        }
        return val
    });
    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state))
    },[state]);
    return[state,dispatch]
}