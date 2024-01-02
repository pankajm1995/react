import React from "react";
class Child extends React.Component
{
    componentWillUnmount()
    {
        alert("component will unmount call")
    }
    render()
    {
        return(
            <div>This is Child Componet</div>
        )
    }
}
export default Child;