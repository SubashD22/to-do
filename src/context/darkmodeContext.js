import { createContext } from "react";
import useToggle from "../hooks/toggleState";
export const DarkmodeContext = createContext();

export function DarkModeProvider(props){
    const[mode,toggle]= useToggle(false)
return(
    <DarkmodeContext.Provider value={{mode,toggle}}>
        {props.children}
    </DarkmodeContext.Provider>
)
};