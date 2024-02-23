import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cap2 from "./pages/Cap2";
import Cap3 from "./pages/Cap3";
import Cap4 from "./pages/Cap4";
import Solid from "./pages/Solid";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/capitulo-2' element={<Cap2 />} />
        <Route path='/capitulo-3' element={<Cap3 />} />
        <Route path='/capitulo-4' element={<Cap4 />} />
        <Route path='/solid' element={<Solid />} />
      </Routes>
    </Router>
  );
}
