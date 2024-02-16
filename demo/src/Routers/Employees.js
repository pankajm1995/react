import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
function Employees() {

    const params = useParams();
    const { name } = params;

    return (

        <div>
            <h1> Employeees Page </h1>

            <NavLink to='/'>Home</NavLink>  &nbsp;&nbsp;
            <NavLink to='/About'>About</NavLink>  &nbsp;&nbsp;
            <NavLink to='/Employees' style={isActive => ({color:isActive?"yellow":"blue"})}>Employees</NavLink> &nbsp;&nbsp;
            <NavLink to='/*'>Contact</NavLink>  &nbsp;&nbsp;

            <br></br>
            <br></br>
            <ul>
            <li><NavLink to='/Employees/one'>Employee One</NavLink></li>
            <li><NavLink to='/Employees/two'>Employee Two</NavLink></li>
            </ul>
        </div>

    )
}
export default Employees