import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import Cap2 from "./pages/Cap2";
import Cap3 from "./pages/Cap3";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/capitulo-2" element={<Cap2/>} />
        <Route path="/capitulo-3" element={<Cap3/>} />
      </Routes>
    </Router>
  )
}