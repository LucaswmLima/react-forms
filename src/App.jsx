import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VanillaForm from "./components/VanillaForm";
import HookForm from "./components/HookForm";
import NavBar from "./components/NavBar";
import "./App.css";
import { render } from '@testing-library/react';
import RenderCounter from './utils/renderCounter';

const App = () => {
  
  return (
   

    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/hook-form" element={<HookForm />} />
          <Route path="/vanilla-form" element={<VanillaForm />} />
          <Route path="/" element={<HookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
