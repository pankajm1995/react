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
                    
                    <Table striped bordered hover>


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
                                            <td>{callback.city}</td>
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