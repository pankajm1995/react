// Run this file Attach in App.js file
import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
function Rouetr()
{
    return(
        <div className="App">
            <BrowserRouter>
                <h1>ROuter</h1>
                <Link to="Home">Home</Link><br />
                <Link to="About">About</Link><br />
                <Routes>
                    <Route path="/Home" element={<Home />}>Home</Route>
                    <Route path="/About" element={<About />}>Home</Route>
                </Routes>
                <Link to="Home">Home</Link><br />
                <Link to="About">About</Link><br />
            </BrowserRouter>
        </div>
    )
}
export default Rouetr;