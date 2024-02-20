import {BrowserRouter,Routes, Route, NavLink} from "react-router-dom"
import Home from "./Navbar/Home"
import About from "./Navbar/About"
import Contact from "./Navbar/Contact"
import Page1 from "./Navbar/Page1"
import 
function Nestednav()
{
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>Home</Route>
                <Route path='/About' element={<About/>}>Home</Route>
                <Route path='/Contact/' element={<Contact/>}>Home
                    <NavLink to="page1">Page1</NavLink>
                    <NavLink to="page2">Page2</NavLink>
                    <NavLink to="page3">Page3</NavLink>
                
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default Nestednav