import React from "react";
import {Table } from "react-bootstrap";

function Frag2(props)
{
    return(
        <div>
        <Table striped bordered hover>
        
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                    <tbody>
                        <td>
                            <tr>
                                <td>{props.data.Id}</td>
                                <td>{props.data.Name}</td>
                                <td>{props.data.Email}</td>
                            </tr>
                        </td>
                    </tbody>
        </Table>
        </div>
    )
}
export default Frag2