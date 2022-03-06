import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Contact";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  )
}