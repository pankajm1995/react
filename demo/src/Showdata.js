// import and add this file in app.js
import { useState } from "react";

function ShowData()
{ 
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(false)
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
        <button onClick={()=>{setPrint(true)}}>Show Data</button>
        </div>
    )
}
export default ShowData;