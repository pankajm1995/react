import { NavLink } from "react-router-dom"
function About() {
    return (
        <div>
            <h1>About Page</h1>

            <NavLink to='/'>Home</NavLink>  &nbsp;&nbsp;
            <NavLink to='/About' style={isActive => ({ color: isActive ? "yellow" : "blue" })}>About</NavLink>  &nbsp;&nbsp;
            <NavLink to='/Employees/two'>Employees</NavLink>   &nbsp;&nbsp;
            <NavLink to='/*'>Contact</NavLink>  &nbsp;&nbsp;
        </div>
    )
}
export default About