import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import React from 'react';
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'

function App() {
  return (

    <div className="App">
        <ScrollContainer>
          <ScrollPage>
            <Animator>
              <h2>Hello World!</h2>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        <HomePage/>
    </div>
  );
}

export default App;
