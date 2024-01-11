import { useState } from "react"

function Renderex()
{
    const[user,usercall]=useState(2)
    return(
        <div className="App">
        {user==3?<h1>Welcome user 1</h1>:user==2?<h1>Welcome User 2</h1>:<h1>Welcome user 3</h1>}
        </div>
    )
}
export default Renderex;