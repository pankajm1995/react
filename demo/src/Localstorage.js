// import and Link this file in App.js
import React,{useRef} from "react"
function Localstorage()
{
    const data = useRef();
    const updateData=()=>
    {
  
      console.log(data.current.value);
    localStorage.setItem("initkey",data.current.value);
    }
    console.log(localStorage.getItem("initkey","****"))
    return(
        <div className="App">
            <h1>Localstorage</h1>
            <input type='text' ref={data}></input>
            <button onClick={updateData}>Click Here</button>
            <h3 style={{color: "green"}}>========Localstorage End============</h3>
        </div>
    )
}
export default Localstorage;