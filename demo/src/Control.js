import { useState } from "react";

function Control()
{
    const [value,setvalue]=useState('0')
    return(
        <div className="App">
            <h1>Control component</h1>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}></input>
            <h1>{value}</h1>
            <h3 style={{color: "green"}}>========Control End============</h3>
        </div>
    )
}
export default Control;