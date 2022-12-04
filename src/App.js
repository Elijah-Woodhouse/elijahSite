import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import React from 'react';
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'

function App() {
  return (

    <div className="App">
        <HomePage/>
    </div>
  );
}

export default App;
