import { useState } from "react";

function Session()
{
    const [value,setvalue] = useState();

    function updateData()
    {
        sessionStorage.setItem('data','panakj');
    }
    function removeData()
    {
        sessionStorage.removeItem('data');
    }
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={updateData}>Set Value</button>
            <button onClick={removeData}>Remove Value</button>
        </div>
    )
}
export default Session;