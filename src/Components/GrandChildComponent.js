import { colorContext } from "../ContextApi";
import { useContext } from "react";

export default function GrandchildComponent(){

    const value=useContext(colorContext);

    return(
        <>
            
            <h1 style={{color:value}}>Color: {value} </h1>
        </>
    )

}

// we can also use Consumer components get context from parentComponent

// import { colorContext } from "../ContextApi";

// export default function GrandchildComponent(){

//     return(
//         <>
//             <colorContext.Consumer>
//                 {(color)=>{
//                    return <h1 style={{color:color}}>Color: {color} </h1>
//                 }}
//             </colorContext.Consumer>
            
//         </>
//     )

// }