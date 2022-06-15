import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Beer } from "./pages/Beer";
import { Beers } from "./pages/Beers";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Beers />}></Route>
        <Route exact path="/Beers/*" element={<Beer />}></Route>
      </Routes>
    </Router>
  );
}
