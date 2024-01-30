
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
        <div>
            <input type='text' ref={data}></input>
            <button onClick={updateData}>Click Here</button>
        </div>
    )
}
export default Localstorage;