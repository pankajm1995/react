import { NavLink } from "react-router-dom"
function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <NavLink to='/' style={isActive => ({ color: isActive ? "yellow" : "blue" })}>Home</NavLink> &nbsp;&nbsp;
            <NavLink to='/About'>About</NavLink> &nbsp;&nbsp;
            <NavLink to='/Employees/one'>Employees</NavLink>   &nbsp;&nbsp;
            <NavLink to='/*'>Contact</NavLink> &nbsp;&nbsp;

        </div>
    )
}
export default Home