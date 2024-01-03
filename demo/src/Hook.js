import react, { useState } from "react"
function Hook()
{
    let Count=10
    let[count,setdata]=useState(0)
    const AddData=()=>
    {
        console.log(Math.random())
    }
    const RemoveData= ()=>
    {
        console.log(Math.random())
    }
    return(
        <div className="App">
            <h1>This is Hook Method</h1>
            <h2>Count : {Count}</h2>
            <button onClick={AddData()}>Add Data</button>
            <br/>
            <br/>
            <button onClick={RemoveData()}>Remove Data</button>
        </div>
    )
}
export default Hook;