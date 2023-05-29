import { useState } from "react";
import GrandChildComponent from "./ChildComponent";
import { colorContext } from "../ContextApi";

export default function ParentComponent(){

    const [color,setColor]=useState("black");

    return(
        <>

            <h1>Pick a color</h1>
            <input type="color" onChange={(e)=>setColor(e.target.value)}/>
            <hr/>

            <colorContext.Provider value={color}>
                 <GrandChildComponent/>
            </colorContext.Provider>
           
        </>
    )
}