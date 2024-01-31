import { useState } from "react";

function Control()
{
    const [value,setvalue]=useState('0')
    return(
        <div>
            <h1>Control component</h1>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}></input>
            <h1>{value}</h1>
        </div>
    )
}
export default Control;