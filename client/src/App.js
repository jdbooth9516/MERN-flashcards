import React from 'react';
import Categories from './components/categories/categories';
import Navbar from './components/navbar/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
    <div className='navbar-outer'>   
      <Navbar />
    </div>
    <div className="main-area">
      < Categories />
    </div>
  </div>
  )
}

export default App;
