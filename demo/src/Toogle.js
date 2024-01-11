import {useState} from "react";
function Toogle()
{
    const[data,setData]=useState()
   
    return(
        <div>
        {
            data?<h1>Hello World</h1>:null
        }
        <button onclick={setData(true)}>Hide Data</button>
        <button onclick={setData(false)}>Show Data</button>
        <button onclick={setData(!true)}>Toogle</button>
        </div>
    )
}
export default Toogle;