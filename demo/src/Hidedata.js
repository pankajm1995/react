import { useState } from "react";

function Hidedata()
{ 
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(true)
    function getData(val)
    {
        console.warn(val.target.value);
        setData(val.target.value)
    }
    return(
        <div>
        {
            print ? <h1>{data}</h1>:<h1>null</h1>
        }
        <input onChange={getData}></input>
        <button onClick={()=>{setPrint(!true)}}>Hide  Data</button>
        </div>
    )
}
export default Hidedata;