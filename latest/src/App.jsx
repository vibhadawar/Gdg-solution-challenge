import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
