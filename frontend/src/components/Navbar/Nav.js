import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/morpion">Morpion</Link>
        </li>
        <li>
          <Link to="/basicapps">Basic Apps</Link>
        </li>
        <li>
          <Link to="/dpApp">Dif picker</Link>
        </li>
        <li>
          <Link to="/tvshow">TV show</Link>
        </li>
      </ul>
    </nav>
  )
}
