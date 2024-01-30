import { useState } from "react"

function high()
{
    return(
        <div className="App">
        <h1>HOC</h1>
        <HOC cmp={counter}/>
        </div>
    )
}
function HOC(props)
{
    return(
        <div>
            <props.cmp/>
        </div>
    )
}
function counter()
{
    const [data,setData]=useState(0)
    return(
        <div>
        <h1>Count:{data}</h1>
        <button onClick={()=>setData(data+1)}>Click update</button>
        </div>
    )
}
export default high;