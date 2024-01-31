import { useRef } from "react"

function Uncontrol()
{
    let inputRef= useRef(null)
    let inputRef1= useRef(null)

    function updateform(e)
    {
        e.preventDefault();
        console.log(inputRef.current.value);
        console.log(inputRef1.current.value);
        let input3= document.getElementById('input3').value
        console.log(input3);
    }
    return(
        <div>
        <h1>Uncontroll component</h1>
        <form onSubmit={updateform}>
            <input type="text" ref={inputRef}></input>
            <input type="text" ref={inputRef1}></input>
            <input type="text" id='input3'></input>
            <button>Click</button>
        </form>
        </div>
    )
}
export default Uncontrol