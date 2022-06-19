import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { About } from "./pages/About";
import { Beer } from "./pages/Beer";
import { Beers } from "./pages/Beers";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Beers />}></Route>
        <Route exact path="/Beers/*" element={<Beer />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
