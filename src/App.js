import logo from "./logo.svg";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
