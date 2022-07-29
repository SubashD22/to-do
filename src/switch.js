import { useContext } from "react";
import { DarkmodeContext } from "./context/darkmodeContext";
import { Switch } from "@mui/material";

 function DarkmodeSwitch(){
    const {mode,toggle}= useContext(DarkmodeContext);
    return(
    <Switch checked={mode} onChange={toggle} color="default" inputProps={{"aria-label": "mode switch"}}/>
 )}

 export default DarkmodeSwitch