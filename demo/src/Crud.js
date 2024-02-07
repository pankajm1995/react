import React, { useState } from 'react';
function crud()
{
    const [name, setName] = useState("");
    const [allData, setAllData] = useState([])
    const [show,setShow]=useState(false)
    const[editText,seteditText]=useState()

    const handled = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name]);
            setName("");
        }
    }
    const handleDelete=(index)=>

    {
       allData.splice(index ,1);
       setAllData([...allData]);
       
        
    }
    const handleEdit=(i)=>
    {
        setName(allData[i]);
        setShow(true)
        seteditText(i)
    }
    const handleupdate=()=>
    {
        allData.splice(editText,1,name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }
    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            {!show?<button onClick={handled}>Add Data</button>:<button onClick={handleupdate}>update</button>}
            {
                allData.map((val,i) =>
                    <div>
                        <h1>{val}</h1>
                        <button onClick={()=>handleEdit(i)}>Edit</button>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                )

            }
         <h3 style={{color: "green"}}>========Crud End============</h3>
        </div>
    )
}
export default crud;