import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';

function App() {

  const location = useLocation();

  return (

    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
