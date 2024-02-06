import React, { useState } from 'react';
function crud()
{
    const [name, setName] = useState("");
    const [allData, setAllData] = useState([])

    const handled = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name]);
            setName("");
        }
    }
    const handleDelete=(index)=>

    {
       
        allData.splice(index,allData[index,1].length)
        setAllData([...allData])
        // setAllData(allData.filter((item)=>item.index!=index));
       
        
    }
    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={handled}>Add Data</button>
            {
                allData.map((val) =>
                    <div>
                        <h1>{val}</h1>
                        <button>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )

            }
         <h3 style={{color: "green"}}>========Crud End============</h3>
        </div>
    )
}
export default crud;