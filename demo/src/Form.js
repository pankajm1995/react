import { useState } from "react"

function Form()
{
    const[data,setData]=useState(null)
    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
    }
    return(
        <div classname="App">
        <h1>Get Data</h1>
        <h1>{data}</h1>
        <input type="text" onChange={getData}></input>
        <h3 style={{color: "green"}}>========Form End============</h3>
        </div>
    )
}
export default Form;