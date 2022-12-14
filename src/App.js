import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./Sites/Index"
import Layout from "./Ui/Layout"

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Sites/Menu";
import Info from "./Sites/Info";
import Err404 from "./Sites/404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            
            <Route path='/menu' element={<Menu />} />
            <Route path='/info' element={<Info />} />

            <Route path='*' element={<Err404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App