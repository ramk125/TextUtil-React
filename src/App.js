import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [navbarColor, setNavbarColor] = useState('light');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const getColor = (cls) => {
    switch (cls) {
      case 'primary': return '#0d6efd';
      case 'danger': return '#dc3545';
      case 'success': return '#198754';
      case 'warning': return '#ffc107';
      case 'dark': return '#042743';
      case 'light': return 'white';
      default: return 'white';
    }
  };

  const toggleMode = (cls) => {
    if (cls === null) {
      const newMode = mode === 'light' ? 'dark' : 'light';
      setMode(newMode);
      setNavbarColor(newMode);
      document.body.style.backgroundColor = getColor(newMode);
      document.body.style.color = newMode === 'dark' ? 'white' : 'black';
      showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, 'success');
      document.title = `TextUtils - ${newMode} Mode`;
    } else {
      setMode(cls);
      // Make navbar a darker shade for contrast
      const navbarShade = cls === 'light' ? 'dark' : 'dark';
      setNavbarColor(navbarShade);
      document.body.style.backgroundColor = getColor(cls);
      document.body.style.color = 'white';
      showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} theme enabled`, 'success');
      document.title = `TextUtils - ${cls} Theme`;
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={navbarColor} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
