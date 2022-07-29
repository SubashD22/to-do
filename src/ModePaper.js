import { Paper } from "@mui/material";
import { useContext } from "react";
import { DarkmodeContext } from "./context/darkmodeContext";


function DarkmoderPaper(props){
    const {mode}=useContext(DarkmodeContext);
    return(
        <Paper 
        style={{
        padding: 0,
        margin:0,
        height:"100vh",
        backgroundColor:mode ? '#3b3b3b' : "#fafafa" 
         }} 
        elevation={0}>
            {props.children}
        </Paper>
    )
}
export default DarkmoderPaper 