import Table from 'react-bootstrap/Table';

function Tloop() {
    const data = [
        { id: 101, name: "Pankaj", city: "surat" },
        { id: 102, name: "Rinku", city: "Vesu" },
        { id: 103, name: "Alok", city: "Varachha" },
        { id: 104, name: "Keyur", city: "Dindoli" },
    ]
    const state=[
       { state:["Uttar Pradesh","Madhya Pradesh","Gujrat","Maharashtra"]}
    ]
    return (
        <Table striped bordered hover variant='yellow'>


            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            {
                data.map((callback) =>
                    
                        <tbody>
                            <tr>
                                <td>{callback.id}</td>
                                <td>{callback.name}</td>
                                <td>{callback.city}
                                    {
                                        state.map((callback)=>
                                        <select>
                                            <option hidden>
                                                <td >--Select City--</td>
                                            </option>
                                            <option>
                                                <td>{callback.state[0]}</td>
                                            </option>
                                            <option>
                                                <td>{callback.state[1]}</td>
                    
                                            </option>
                                            <option>
                                                <td>{callback.state[2]}</td>
                    
                                            </option>
                                            </select> 
                                        )
                                       
                                    }
                                </td>
                            </tr>
                        </tbody>
                )
            }
        </Table>
    );
}

export default Tloop;