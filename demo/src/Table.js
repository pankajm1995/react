           // import  this file in app.js
           import Table from 'react-bootstrap/Table';

            function Tables() {
                const data = [
                    { id: 101, name: "Pankaj", city: "surat" },
                    { id: 102, name: "Rinku", city: "Vesu" },
                    { id: 103, name: "Alok", city: "Varachha" },
                    { id: 104, name: "Keyur", city: "Dindoli" },
                ]

                return (
                    <div className='App'>
                    
                    <Table striped bordered hover style={{border:"3px  solid black",width:"550px",height:"300px"}}>


                        <thead >
                            <tr>
                                <th style={{border:"2px  solid black"}}>Id</th>
                                <th style={{border:"2px  solid black"}}>Name</th>
                                <th style={{border:"2px  solid black"}}>City</th>
                            </tr>
                        </thead>
                        {
                            data.map((callback) =>
                                
                                    <tbody>
                                        <tr>
                                            <td style={{border:"2px  solid black"}}>{callback.id}</td>
                                            <td style={{border:"2px  solid black"}}>{callback.name}</td>
                                            <td style={{border:"2px  solid black"}}>{callback.city}</td>
                                        </tr>
                                    </tbody>
                            )
                        }
                    </Table>
                    <h3 style={{color: "green"}}>========TAble End============</h3>
                    </div>
                );
            }

            export default Tables;