import {Button} from "@mui/material";
import {useState} from "react";

const css = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",
    gap: "40px",
    width:"200px",
    background: "#F4F4F4",
    borderRadius: "6px"
}

export default function Contador (props){

    let [cout,setCout] = useState(1)

    return (<div style={css}>
        <Button onClick={()=>{  setCout(prevState =>   prevState > 1  ?   prevState - 1 : 1    )  }} sx={{color:"#B7005C"}}  >-</Button>
        <label ><b>{cout}</b></label>
        <Button onClick={()=>{  setCout(prevState =>   prevState + 1)  }} sx={{color:"#B7005C"}} >+</Button>
    </div>)

}


