import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
