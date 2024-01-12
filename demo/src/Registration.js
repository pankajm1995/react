import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Registration()
{
    
    const[err,setErr]=useState(false)
    const[errs,setErrs]=useState(false)
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
    function pwdData(e)
    {
        let item =e.target.value;
        if(item.length<8)
        {
            setErrs(true)
        }else if(item=="A" || item=="Z")
        {
            setErrs(true)
        }
        else
        {
            setErrs(false)
        }
    }
    return(
        <div className="App">
        <h1 className='App' style={{color:"green"}}>Registration Form</h1>
        <form onSubmit={getData}>
            <input type="text" placeholder="Enter Your Name" onChange={userData}></input>{err?<span>User Name not valid</span>:""}<br/><br/>
            <input type="password" placeholder="Enter Your Password" onChange={pwdData}></input>{errs?<span>Password not valid</span>:""}<br/><br/>
            <Button variant="success">Success</Button>{' '}
        </form>
        </div>
    )
}
export default Registration;