import logo from './logo.svg';
import './App.css';

import Projects from './components/Projects';
import PageOne from './components/PageOne';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
