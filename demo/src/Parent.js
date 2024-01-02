import React from "react";
import Child from './Child'
class Parent extends React.Component
{   
    constructor()
    {
        super()
        this.state={
            show:true
        }
    }

    render()
    {
        return(
            <div>
            {
                this.state.show?<Child/>:<h1>Component Removed</h1>
            }
            <button onClick={()=>this.setState({show:!this.state.show})}>Component Hide</button>
            </div>
           
        )
    }

}
export default Parent;