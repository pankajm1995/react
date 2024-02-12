// Run this file Attach in App.js file
import Home from './Component/Home';
import About from './Component/About';
import Error from './Component/Error';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
function Rouetr()
{
    return(
        <div className="App">
            <BrowserRouter>
                <h1>Router</h1>
                <Link to="Home">Home</Link><br />
                <Link to="About">About</Link><br />
             
                <Routes>
                    <Route path="/Home" element={<Home />}>Home</Route>
                    <Route path="/About" element={<About />}>Home</Route>
                    <Route path="/*" element={<Error/>}>Error</Route>
                </Routes>     
        </BrowserRouter>
            <h3 style={{color: "green"}}>========Router End============</h3>
        </div>

    )
}
export default Rouetr;