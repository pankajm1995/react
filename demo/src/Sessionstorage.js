// import and Link this file in App.js
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
        <div className="App">
            <h1>Sessionstorage</h1>
            <h1>{value}</h1>
            <button onClick={updateData}>Set Value</button>
            <button onClick={removeData}>Remove Value</button>
            <h3 style={{color: "green"}}>========sessionStorage End============</h3>
        </div>
    )
}
export default Session;