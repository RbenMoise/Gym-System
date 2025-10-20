import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Services from "./pages/Services/Services";
import Classes from "./pages/Classes/Classes";
import Trainers from "./pages/Trainers/Trainer";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Conatact/Contact";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
