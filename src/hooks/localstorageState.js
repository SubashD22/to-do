import React,{useState,useEffect} from "react";

export default (key,defaultval) =>{
    const [state,setState]=useState(()=>{

        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key)) || String(defaultval)
        }catch(e){
            val = defaultval
        }
        return val
    })
    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state))
    },[state]);
    return[state,setState]
}