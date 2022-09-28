import './App.css';

import React, {
  useState,
  createContext  
} from 'react';

import Products from './pages/Products';
import CartPage from './pages/Cart';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export const CartProductContext = createContext(null)

function App() {

  

  return (
    
      <BrowserRouter className="App-container">

        <Navbar />
        
        
      </BrowserRouter>
    
  );
}

export default App;
