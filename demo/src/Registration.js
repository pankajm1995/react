import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Registration()
{
    const[err,setErr]=useState(false)
    function getData(e)
    {
        e.preventDefault();
    }
    function userData(e)
    {
        let item=e.target.value;
        if(item.length<3)
        {
            setErr(true)
        }
        else
        {
            setErr(false)
        }
    }
    return(
        <div className="App">
        <form onSubmit={getData}>
            <input type="text" placeholder="Enter Your Name" onChange={userData}></input>{err?<span>User Name not valid</span>:""}<br/><br/>
            <input type="password" placeholder="Enter Your Password" ></input><br/><br/>
            <Button variant="success">Success</Button>{' '}
        </form>
        </div>
    )
}
export default Registration;