import {useState} from "react"
function Render()
{
    const[user,setUser]=useState(false)
    return(
        <div className="App">
            {user?<h1>Hello Pankaj</h1>:<h1>Welcome Guest User</h1>}
        </div>
    )
}
export default Render;