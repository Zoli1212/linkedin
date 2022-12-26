import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>

      </div>

    </div>
  );
}

export default App;
