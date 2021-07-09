import React from 'react'
import { CreateCategory } from '../CreateCategory/CreateCategory';
import './Navbar.css'

export default function Navbar(props) {

    return (
      <div className="navbar-inner">
        <div className="logo">
          <h1> FlashCards </h1>
        </div>
        <div className="buttons">
          <CreateCategory /> 
        </div>
        <div></div>
      </div>
    );
}
