import {useState} from "react";
function Toogle()
{
    const[data,setData]=useState()
   
    return(
        <div className="App">
        {
            data?<h1>Hello World</h1>:null
        }
        <button onclick={setData(true)}>Hide Data</button>
        <button onclick={setData(false)}>Show Data</button>
        <button onclick={setData(!true)}>Toogle</button>
        <h3 style={{color: "green"}}>========Toogle End============</h3>
        </div>
    )
}
export default Toogle;