import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Deck from './components/deck';
import Home from './components/home';
import NewDeck from './components/new-deck';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deck/new" element={<NewDeck />} />
          <Route path="/deck/:id" element={<Deck />} />
        </Routes>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
