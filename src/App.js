import "./style.css"
import Home from "./pages/home.js"
import Project from "./pages/project.js"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // let current = <Home/>
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
      {/* {current} */}
    </>
  )
}
export default App;