import Table from 'react-bootstrap/Table';

function BasicExample() {

    const arr=[
        {
            name:"pankaj",
            city:"Surat"
        },
        {
            name:"Keyur",
            city:"Amreli"
        },
        {
            name:"Rinku",
            city:"PArvatPatiya"
        },
        {
            name:"Alok",
            city:"Dindoli"
        }
    ]
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
        </tr>
      <tbody>
         
            {arr.map((items)=>
            
                <div>
                <tr>
                    <td>{items.name}</td>
                    <td>{items.city}</td>
                </tr>
                </div>
            )}
         
      </tbody>
      </thead>
    </Table>
  );
}

export default BasicExample;