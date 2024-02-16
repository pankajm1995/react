// move this file app.js save and run
import Home from './Routers/Home';
import About from './Routers/About';
import Page404 from './Routers/Page404';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Employees from './Routers/Employees';
function Routercss() {


  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/About' element={<About />}></Route>
                  <Route path='/Employees/:name' element={<Employees />}></Route>
                  <Route path='/*' element={<Page404 />}></Route>
              </Routes>
          </BrowserRouter>
      </div>

  )
}

export default Routercss
