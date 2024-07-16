import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VanillaForm from "./components/VanillaForm";
import HookForm from "./components/HookForm";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (

    <Router>
      <div className="app">
        <div className="app-title">React Hook Form vs Vanilla Form</div>
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
