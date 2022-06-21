import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { About } from "./components/pages/About";
import { Beers } from "./components/pages/Beers";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Beers />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
