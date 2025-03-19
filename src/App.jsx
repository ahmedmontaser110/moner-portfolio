import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import AllProjects from "./pages/AllProjects.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
