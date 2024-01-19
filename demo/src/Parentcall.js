import React  from "react";

function Col(props)
{
    const {name,getData}=props

    return(
        <React.Fragment>
            <h1>User {props.name}</h1>
            <button onClick={getData}>Click</button>
        </React.Fragment>
    )
}
export default Col